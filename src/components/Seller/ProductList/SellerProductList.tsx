import useSeller from "components/Seller/hooks/useSeller";
import SellerProduct from "components/Seller/Product/SellerProduct";
import * as S from "./SellerProductList.style";

export default function SellerProductList() {
  const { productList } = useSeller();

  return (
    <S.Wrapper>
      <S.TitleList>
        <li>상품정보</li>
        <li>판매가격</li>
        <li>수정</li>
        <li>삭제</li>
      </S.TitleList>
      <ul>
        {productList.map((item: any) => (
          <SellerProduct key={item.product_id} {...item} />
        ))}
      </ul>
    </S.Wrapper>
  );
}
