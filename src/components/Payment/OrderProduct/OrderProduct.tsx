import useCart from "components/Cart/hooks/useCart";
import { toLocaleString } from "components/Form/utils/toLocaleString";
import * as S from "./OrderProduct.style";

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

  const fee =
    shipping_fee === 0 ? "무료배송" : toLocaleString(shipping_fee) + "원";

  return (
    <S.Wrapper>
      <S.Img src={image} alt="" style={{ width: "100px", height: "100px" }} />
      <S.ProductInfoContainer>
        <span>{store_name}</span>
        <span>{product_name}</span>
        <span>수량: {quantity}개</span>
      </S.ProductInfoContainer>
      <S.DiscountContainer>-</S.DiscountContainer>
      <S.ShippingFeeContainer>{fee}</S.ShippingFeeContainer>
      <S.TotalPriceContainer>
        <span>{toLocaleString(price * quantity)}원</span>
      </S.TotalPriceContainer>
    </S.Wrapper>
  );
}
