import ProductDetail from "src/components/ProductDetail/Product/ProductDetail";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { product_id } = useParams();
  return (
    <>
      <ProductDetail product_id={product_id}></ProductDetail>
    </>
  );
}
