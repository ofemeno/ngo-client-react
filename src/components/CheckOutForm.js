import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

export default function CheckOutForm() {
  const stripe = useStripe();
  const elements = useElements();
  let [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <div className="checkout">
      <div className="payment-card">
      <PaymentElement />
      <a href="">Pay</a>
      </div>
      
    </div>
  );
}
