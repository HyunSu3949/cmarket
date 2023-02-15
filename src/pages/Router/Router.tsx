import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "lib/auth/AuthProvider/AuthProvider";
import HomePage from "pages/Home/HomePage";
import LoginPage from "pages/Login/LoginPage";
import SignUpPage from "pages/SignUp/SignUpPage";
import CartPage from "pages/Cart/CartPage";
import ProductDetailPage from "pages/ProductDetail/ProductDetailPage";
import PaymentPage from "pages/Payment/PaymentPage";
import SellerPage from "pages/SellerPage/SellerPage";
import EditProduct from "pages/EditProduct/EditProduct";
import UploadProduct from "pages/UploadProduct.tsx/UploadProduct";
import MyOrderPage from "pages/MyOrder/MyOrderPage";
import NavbarLayout from "components/common/Layout/NavbarLayout";

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
                path="/productdetail/:product_id"
                element={<ProductDetailPage />}
              />
              <Route path="/sellerpage" element={<SellerPage />} />
              <Route path="/editproduct" element={<EditProduct />} />
              <Route path="/uploadproduct" element={<UploadProduct />} />
              <Route path="/myorder" element={<MyOrderPage />} />
            </Route>
          </>
        ) : (
          <>
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/productdetail/:product_id"
                element={<ProductDetailPage />}
              />
              <Route path="/payment" element={<PaymentPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
