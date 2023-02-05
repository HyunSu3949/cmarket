import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "src/pages/Home/HomePage";
import LoginPage from "src/pages/Login/LoginPage";
import SignUpPage from "src/pages/SignUp/SignUpPage";
import CartPage from "src/pages/Cart/CartPage";
import ProductDetailPage from "src/pages/Product/ProductDetailPage";
import PaymentPage from "src/pages/Payment/PaymentPage";
import { useContext } from "react";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";
import SellerPage from "src/pages/SellerPage/SellerPage";
import NavbarLayout from "src/components/common/NavBar/NavbarLayout";
import EditProduct from "src/pages/EditProduct/EditProduct";

export default function Router() {
  const { isLogedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {isLogedIn ? (
          <>
            <Route element={<NavbarLayout />}>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/" element={<HomePage />} />
              <Route
                path="/product/:product_id"
                element={<ProductDetailPage />}
              />
            </Route>
            <Route path="/sellerpage" element={<SellerPage />} />
            <Route path="/editproduct" element={<EditProduct />} />
          </>
        ) : (
          <>
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/product/:product_id"
                element={<ProductDetailPage />}
              />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
