import React, { useState } from "react";
import * as S from "./SubmitConfirm.style";
import { toLocaleString } from "components/Form/utils/toLocaleString";

type Props = {
  order_kind: "cart_order" | "cart_one_order" | "direct_order";
  product_id: number;
  quantity?: number;
  price?: number;
  total_product_price?: number;
  total_shipping_fee?: number;
  shipping_fee?: number;
};

export default function SubmitConfrim(props: Props) {
  const [agreed, setAgreed] = useState(false);
  const {
    order_kind,
    price = 0,
    quantity = 0,
    shipping_fee = 0,
    total_product_price = 0,
    total_shipping_fee = 0,
  } = props;
  const confirmPrice =
    order_kind === "cart_order" ? total_product_price : price * quantity;
  const confirmShippingFee =
    order_kind === "cart_order" ? total_shipping_fee : shipping_fee;

  return (
    <S.Wrapper>
      <S.H3>최종결제 정보</S.H3>
      <S.SubmitInfoContainer>
        <S.TextContainer>
          <div>
            <S.Text>-상품금액</S.Text>
            <S.Price>{toLocaleString(confirmPrice)}원</S.Price>
          </div>
          <div>
            <S.Text>-할인금액</S.Text> <S.Price>0원</S.Price>
          </div>
          <div>
            <S.Text>-배송비</S.Text>
            <S.Price>{toLocaleString(confirmShippingFee)}원</S.Price>
          </div>
          <S.Divider />
          <div>
            <S.Text>-결제금액</S.Text>
            <S.TotalPrice>
              {toLocaleString(confirmPrice + confirmShippingFee)}원
            </S.TotalPrice>
          </div>
        </S.TextContainer>
        <S.SubmitContainer>
          <div>
            <input
              id={"confirm"}
              type="checkbox"
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="confirm">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </label>
          </div>
          <S.Button type="submit" disabled={!agreed}>
            주문하기
          </S.Button>
        </S.SubmitContainer>
      </S.SubmitInfoContainer>
    </S.Wrapper>
  );
}
