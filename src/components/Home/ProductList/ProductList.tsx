import useProductList from "src/components/Home/ProductList/useProductList";
import Product from "src/components/Home/Product/Product";
import * as S from "./ProductListStyle";
import Pagination from "react-js-pagination";
import NumberingPage from "src/components/Home/NumberingPage/NumberingPage";

export default function ProductList() {
  const { data, isLoading, currentPage, setPageNumber, totalCount } =
    useProductList();
  if (isLoading) return <div>...</div>;
  return (
    <>
      <S.List>
        {data.data.results.map((item: any) => (
          <Product key={item.product_id} {...item} />
        ))}
      </S.List>
      <Pagination
        activePage={currentPage} // 현재 페이지
        totalItemsCount={totalCount}
        itemsCountPerPage={15} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"‹-"} // "이전"을 나타낼 텍스트
        nextPageText={"-›"} // "다음"을 나타낼 텍스트
        onChange={(pageNumber) => setPageNumber(pageNumber)} // 페이지 변경을 핸들링하는 함수
      />
    </>
  );
}
