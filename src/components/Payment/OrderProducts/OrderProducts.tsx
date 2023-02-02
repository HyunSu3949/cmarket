type Props = {
  price: number;
  shipping_fee: number;
  product_name: string;
  quantity: number;
  seller_store: string;
  image: string;
};
export default function OrderProducts(props: Props) {
  const { price, shipping_fee, product_name, quantity, seller_store, image } =
    props;

  const totalPrice = price * quantity + shipping_fee;

  return (
    <div>
      <img src={image} alt="" style={{ width: "100px", height: "100px" }} />
      <span>{seller_store}</span>
      <span>{product_name}</span>
      <span>수량: {quantity}</span>
      <span>주문금액: {totalPrice}원</span>
    </div>
  );
}
