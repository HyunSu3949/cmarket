import useCart from "src/components/Cart/useCart";
type Props = {
  product_id: number;
};

export default function OrderProduct({ product_id }: Props) {
  const { combinedCartInfoList } = useCart();
  const product = combinedCartInfoList.find(
    (item: any) => item.product_id === product_id
  );
  const { image, price, store_name, product_name, quantity, shipping_fee } =
    product;
  const totalPrice = price * quantity + shipping_fee;

  return (
    <div>
      <img src={image} alt="" style={{ width: "100px", height: "100px" }} />
      <span>{store_name}</span>
      <span>{product_name}</span>
      <span>수량: {quantity}</span>
      <span>주문금액: {totalPrice}원</span>
    </div>
  );
}
