import useProductDetail from "pages/ProductDetail/hooks/useProductDetailPage";
import { toLocaleString } from "components/Form/utils/toLocaleString";
import * as S from "./DirectOrderProduct.styled";

type Props = {
  product_id: number;
  quantity: number;
};

export default function DirectOrderProduct({ product_id, quantity }: Props) {
  const { productData } = useProductDetail({ product_id });
  const { image, price, store_name, product_name, shipping_fee } = productData;

  const totalPrice = price * quantity + shipping_fee;
  const shippingFee =
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
      <S.ShippingFeeContainer>{shippingFee}</S.ShippingFeeContainer>
      <S.TotalPriceContainer>
        <span>{toLocaleString(totalPrice)}원</span>
      </S.TotalPriceContainer>
    </S.Wrapper>
  );
}
