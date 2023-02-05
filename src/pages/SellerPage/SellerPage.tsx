import SellerProductList from "src/components/Seller/ProductList/SellerProductList";
import { Link } from "react-router-dom";

export default function SellerPage() {
  return (
    <div>
      <Link to={"/editproduct"}>상품 업로드</Link>
      <SellerProductList />
    </div>
  );
}
