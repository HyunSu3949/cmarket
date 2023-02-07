import React from "react";
import { Link } from "react-router-dom";
import useProductDetail from "src/components/hooks/useProductDetailPage";
import AddCartButton from "src/components/ProductDetail/Button/AddCartButton/AddCartButton";
import * as S from "./ProductDetailStyle";

export default function ProductDetail({
  product_id,
}: {
  product_id: string | undefined;
}) {
  const id = !!product_id ? +product_id : 0;
  const order_kind = "direct_order";
  const { productData, quantity, setQuantity } = useProductDetail({
    product_id: id,
  });
  const {
    image,
    price,
    product_name,
    store_name,
    shipping_fee,
    delivery_method,
  } = productData;

  const fee = shipping_fee ? `${shipping_fee} 원` : "무료배송";
  const method = delivery_method === "PARCEL" ? "택배배송" : "소포";
  const url = "/payment",
    state = {
      ...productData,
      order_kind,
      quantity,
    };

  return (
    <S.Wrapper>
      <div>
        <S.Img src={image} alt="상품 이미지" />
      </div>
      <div>
        <S.StoreName>{store_name}</S.StoreName>
        <S.ProductName>{product_name}</S.ProductName>
        <S.ProductPrice>
          {price.toLocaleString("ko-KR")}
          <span>원</span>
        </S.ProductPrice>
        <S.Method_Fee>
          {method} / {fee}
        </S.Method_Fee>
        <S.BtnWrapper>
          <button
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity <= 1}
          >
            <S.MinusIcon />
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>
            <S.PlusIcon />
          </button>
        </S.BtnWrapper>
        <div>
          <span>총 상품금액</span>
          <span>
            총 수량 <span>{quantity}</span>개
          </span>
          <S.ProductPrice>
            {(quantity * price).toLocaleString("ko-KR")}
            <span>원</span>
          </S.ProductPrice>
        </div>
        <div>
          <Link to={url} state={state}>
            바로구매
          </Link>
          <AddCartButton product_id={id} quantity={quantity}>
            장바구니
          </AddCartButton>
        </div>
      </div>
    </S.Wrapper>
  );
}
