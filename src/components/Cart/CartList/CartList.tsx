import React from "react";
import useCart from "./../useCart";
import CartProduct from "src/components/Cart/CartProduct/CartProduct";
import { useNavigate, Link } from "react-router-dom";
import { toLocaleString } from "src/components/Form/utils/toLocaleString";
import * as S from "./CartList.style";

type Item = {
  cart_item_id: number;
  product_id: number;
  quantity: number;
  image: string;
  store_name: string;
  product_name: string;
  price: number;
  shipping_fee: number;
  shipping_method: string;
  is_active?: boolean;
  my_cart?: number;
};

export default function CartList() {
  const {
    combinedCartInfoList,
    total_price,
    total_shipping_fee,
    total_product_price,
  } = useCart();

  return (
    <S.Wrapper>
      <S.H2>장바구니</S.H2>
      <S.TitleInfo>
        <span>상품정보</span>
        <span>수량</span>
        <span>상품금액</span>
      </S.TitleInfo>
      <ul>
        {combinedCartInfoList.map((item: Item) => (
          <CartProduct key={item.product_id} {...item} />
        ))}
      </ul>
      <S.TotalInfo>
        <S.TextBox>
          <span>총 상품금액</span>
          <span>
            {toLocaleString(total_product_price)}
            <span>원</span>
          </span>
        </S.TextBox>
        <S.IconBox>
          <S.MinusIcon />
        </S.IconBox>
        <S.TextBox>
          <span>상품 할인</span>
          <span>
            {0}
            <span>원</span>
          </span>
        </S.TextBox>
        <S.IconBox>
          <S.PlusIcon />
        </S.IconBox>
        <S.TextBox>
          <span>배송비</span>
          <span>
            {toLocaleString(total_shipping_fee)}
            <span>원</span>
          </span>
        </S.TextBox>
        <S.TextBox></S.TextBox>
        <S.TotalTextBox>
          <span>결제 예정 금액</span>
          <span>
            {toLocaleString(total_price)}
            <span>원</span>
          </span>
        </S.TotalTextBox>
      </S.TotalInfo>
      <S.LinkBtn
        to={"/payment"}
        state={{
          order_kind: "cart_order",
        }}
      >
        주문하기
      </S.LinkBtn>
    </S.Wrapper>
  );
}
