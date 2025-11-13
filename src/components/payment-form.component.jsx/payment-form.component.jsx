import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./payment-form.scss";

const PaymentForm = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    // simulate payment success
    setTimeout(() => {
      setProcessing(false);
      setPaymentMessage("✅ Payment Successful! Thank you for your purchase.");
      // close modal after short delay
      setTimeout(() => {
        onClose();
      }, 1200);
    }, 1000);
  };

  return (
    <div className="payment-form-container">
      <h2>Pay with Dollar Card 💳</h2>
      <form onSubmit={paymentHandler}>
        <CardElement />
        <button disabled={processing} className="pay-now-button">
          {processing ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
    </div>
  );
};

export default PaymentForm;
