import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./components/pages/IndexPage";
import DonationPage from "./components/pages/DonationPage";
import PageNotFound from "./components/PageNotFound";
import PaymentPage from "./components/pages/PaymentPage";
import Complete from "./components/pages/Complete";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/completion" element={<Complete />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
