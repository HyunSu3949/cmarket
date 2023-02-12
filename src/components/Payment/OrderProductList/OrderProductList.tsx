import React from "react";
import OrderProducts from "components/Payment/OrderProduct/OrderProduct";
import useCart from "components/Cart/useCart";
import * as S from "./OrderProductList.styled";

export default function OrderProductList() {
  const { combinedCartInfoList } = useCart();
  return (
    <S.Wrapper>
      <S.H2>주문/결제하기</S.H2>
      <S.TitleInfo>
        <span>상품정보</span>
        <span>할인</span>
        <span>배송비</span>
        <span>주문금액</span>
      </S.TitleInfo>
      <ul>
        {combinedCartInfoList.map((item: any) => (
          <OrderProducts key={item.product_id} {...item} />
        ))}
      </ul>
    </S.Wrapper>
  );
}
