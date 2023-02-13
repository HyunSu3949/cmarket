import ProductDetail from "components/ProductDetail/Product/ProductDetail";
import { useParams } from "react-router-dom";
import useDocumentTitle from "components/hooks/useDocumentTitle";

export default function ProductDetailPage() {
  const { product_id } = useParams();
  useDocumentTitle({
    title: "상품 상세 정보 - 호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "상품 상세 화면",
  });
  return (
    <main>
      <ProductDetail product_id={product_id}></ProductDetail>
    </main>
  );
}
