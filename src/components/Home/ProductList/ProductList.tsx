import useProductList from "components/Home/ProductList/hooks/useProductList";
import Product from "components/Home/Product/Product";
import Pagination from "react-js-pagination";
import Loading from "components/common/Loading/Loading";
import * as S from "./ProductListStyle";

export default function ProductList() {
  const { productList, currentPage, setPageNumber, totalCount } =
    useProductList();
  return (
    <S.Wrapper>
      <Loading />
      <S.ItemGrid>
        <S.List>
          {productList.map((item: any) => (
            <Product key={item.product_id} {...item} />
          ))}
        </S.List>
      </S.ItemGrid>
      <S.PaginationWrapper>
        <Pagination
          activePage={currentPage} // 현재 페이지
          totalItemsCount={totalCount}
          itemsCountPerPage={15} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          onChange={(pageNumber) => setPageNumber(pageNumber)} // 페이지 변경을 핸들링하는 함수
        />
      </S.PaginationWrapper>
    </S.Wrapper>
  );
}
