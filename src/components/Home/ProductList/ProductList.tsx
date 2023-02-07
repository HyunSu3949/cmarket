import useProductList from "src/components/Home/ProductList/useProductList";
import Product from "src/components/Home/Product/Product";
import * as S from "./ProductListStyle";
import Pagination from "react-js-pagination";

export default function ProductList() {
  const { productList, currentPage, setPageNumber, totalCount } =
    useProductList();
  return (
    <>
      <S.ItemGrid>
        {productList.map((item: any) => (
          <Product key={item.product_id} {...item} />
        ))}
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
    </>
  );
}
