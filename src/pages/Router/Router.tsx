import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "src/pages/Home/HomePage";
import LoginPage from "src/pages/Login/LoginPage";
import SignUpPage from "src/pages/SignUp/SignUpPage";
import AuthProvider from "src/lib/auth/AuthProvider/AuthProvider";
import CartPage from "src/pages/Cart/CartPage";
import ProductDetailPage from "src/pages/Product/ProductDetailPage";
import PaymentPage from "src/pages/Payment/PaymentPage";
import SellerPage from "src/pages/SellerPage/SellerPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthProvider />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/sellerpage" element={<PaymentPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:product_id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
