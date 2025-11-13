import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import "./payment-button.scss"
// Replace with your publishable key
const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    // For demo purposes, we’ll just simulate success
    // In real app, call your backend to create PaymentIntent
    setTimeout(() => {
      alert("Payment successful!");
      setIsProcessingPayment(false);
    }, 5000);
  };

  return (
    <form onSubmit={paymentHandler}>
      <CardElement />
      <button disabled={isProcessingPayment || !stripe}>
        {isProcessingPayment ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

// Wrap in Elements provider
const PaymentButton = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentButton;
