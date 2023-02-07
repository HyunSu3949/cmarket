import useProductDetail from "src/components/hooks/useProductDetailPage";
type Props = {
  product_id: number;
  quantity: number;
};

export default function DirectOrderProduct({ product_id, quantity }: Props) {
  const { productData } = useProductDetail({ product_id });
  const { image, price, store_name, product_name, shipping_fee } = productData;
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
