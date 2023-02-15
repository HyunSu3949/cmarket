import CartList from "components/Cart/CartList/CartList";
import useDocumentTitle from "pages/hooks/useDocumentTitle";

export default function CartPage() {
  useDocumentTitle({
    title: "내 장바구니 - 호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "장바 구니 화면",
  });
  return (
    <main>
      <CartList />
    </main>
  );
}
