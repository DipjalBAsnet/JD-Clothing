import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context"; // Make sure this is correct
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase.utility";
import "./Navigation.scss";

const Navigation = () => {
  // Make sure you get currentUser and setCurrentUser from context
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // Define the logout handler here
  const signOutHandler = async () => {
    await signOutUser(); // Firebase sign out
    setCurrentUser(null); // Update context
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <>
              <span className="nav-link welcome-user">
                👋 {currentUser.displayName || currentUser.email}
              </span>
              <span className="nav-link sign-out" onClick={signOutHandler}>
                SIGN OUT
              </span>
            </>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
