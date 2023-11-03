import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckOutForm from "../CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

export default function PaymentPage(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/config").then(async (r) => {
      const { publishAbleKey } = await r.json();
      console.log(publishAbleKey);
      setStripePromise(loadStripe(publishAbleKey));
    });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      // console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
   <div>
    {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckOutForm />
        </Elements>
      )}
   </div>
  );
}
