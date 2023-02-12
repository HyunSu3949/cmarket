import ProductList from "components/Home/ProductList/ProductList";
import useDocumentTitle from "components/hooks/useDocumentTitle";

export default function HomePage() {
  useDocumentTitle({
    title: "호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "호두마켓 메인 화면",
  });

  return (
    <main>
      <ProductList />
    </main>
  );
}
