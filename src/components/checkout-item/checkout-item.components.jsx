import "./checkout-item.components.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import PaymentForm from "../payment-form.component.jsx/payment-form.component";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  // local state to show/hide modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  const handlePayNowClick = () => {
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>

        <span className="name">{name}</span>

        <span className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>

        <span className="price">{price}</span>

        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>

        {/* Pay Now button next to item */}
        <div className="pay-button-block">
          <button className="pay-now-inline" onClick={handlePayNowClick}>
            Pay Now
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay" onClick={handleCloseModal}>
          <div
            className="payment-modal"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <PaymentForm onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutItem;
