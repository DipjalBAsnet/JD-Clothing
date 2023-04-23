import SignUpForm from "../../components/sign-up form/sign-up.component";
import SignInForm from "../../components/sign-in form/sign-in-form.component";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
