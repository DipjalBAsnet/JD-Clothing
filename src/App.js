import Main from "./routes/home/Main.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY"); 

const App = () => {
  return (
    <Elements stripe={stripePromise}>

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="shop/*" element={<Shop />} />
        <Route index element={<Main />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
    </Elements>
  );
};

export default App;
