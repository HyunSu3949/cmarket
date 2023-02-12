import SellerProductList from "components/Seller/ProductList/SellerProductList";
import { useState } from "react";

import * as S from "./SellerPage.styled";

export default function SellerPage() {
  const [selectedButton, setSelectedButton] = useState<number | undefined>(1);

  return (
    <S.Wrapper>
      <S.StyledLink to={"/editproduct"}>상품 업로드</S.StyledLink>
      <div>
        <S.BtnNav>
          <S.Button
            className={selectedButton === 1 ? "clicked" : ""}
            onClick={() => setSelectedButton(1)}
          >
            판매중인 상품
          </S.Button>
          <S.Button
            className={selectedButton === 2 ? "clicked" : ""}
            onClick={() => setSelectedButton(2)}
          >
            주문/배송
          </S.Button>
          <S.Button
            className={selectedButton === 3 ? "clicked" : ""}
            onClick={() => setSelectedButton(3)}
          >
            문의/리뷰{" "}
          </S.Button>
        </S.BtnNav>
        <div>
          <SellerProductList />
        </div>
      </div>
    </S.Wrapper>
  );
}
