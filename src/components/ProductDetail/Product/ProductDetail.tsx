import { Link } from "react-router-dom";
import useProductDetail from "pages/ProductDetail/hooks/useProductDetailPage";
import AddCartButton from "components/ProductDetail/AddCartButton/AddCartButton";
import * as S from "./ProductDetail.style";
import Loading from "components/common/Loading/Loading";

export default function ProductDetail({
  product_id,
}: {
  product_id: string | undefined;
}) {
  const id = !!product_id ? +product_id : 0;

  const { productData, quantity, setQuantity, preventClick } = useProductDetail(
    {
      product_id: id,
    }
  );

  const {
    image,
    price,
    product_name,
    store_name,
    shipping_fee,
    delivery_method,
  } = productData;

  const fee = shipping_fee ? `${shipping_fee} 원` : "무료배송";
  const method = delivery_method === "PARCEL" ? "택배배송" : "택배배송";
  const total_price = quantity * price + shipping_fee;
  const url = "/payment",
    state = {
      ...productData,
      order_kind: "direct_order",
      quantity,
      total_price,
      shipping_fee,
    };

  return (
    <S.Wrapper>
      <div>
        <S.Img src={image} alt="상품 이미지" />
      </div>
      <div>
        <S.ProductInfoContainer>
          <S.StoreName>{store_name}</S.StoreName>
          <S.ProductName>{product_name}</S.ProductName>
          <S.ProductPrice>
            {Number(price).toLocaleString("ko-KR")}
            <span>원</span>
          </S.ProductPrice>
        </S.ProductInfoContainer>
        <S.Method_Fee>
          {method} / {fee}
        </S.Method_Fee>
        <S.QuantityBtnContainer>
          <S.QuantityBtn
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity <= 1}
          >
            <S.MinusIcon />
          </S.QuantityBtn>
          <S.Quantity>{quantity}</S.Quantity>
          <S.QuantityBtn onClick={() => setQuantity((prev) => prev + 1)}>
            <S.PlusIcon />
          </S.QuantityBtn>
        </S.QuantityBtnContainer>
        <S.PriceContainer>
          <span className="totalword">총 상품금액</span>
          <div>
            <span className="totalprice">
              총 수량 <span>{quantity}</span>개
            </span>
            <S.ProductPrice>
              {Number(quantity * price).toLocaleString("ko-KR")}
              <span>원</span>
            </S.ProductPrice>
          </div>
        </S.PriceContainer>
        <S.BtnContainer>
          <Link to={url} state={state} onClick={preventClick}>
            바로구매
          </Link>
          <AddCartButton product_id={id} quantity={quantity}>
            장바구니
          </AddCartButton>
        </S.BtnContainer>
      </div>
      <Loading />
    </S.Wrapper>
  );
}
