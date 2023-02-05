import React from "react";
import useProductList from "../ProductList/useProductList";
import Pagination from "react-js-pagination";

export default function NumberingPage({}) {
  const { currentPage, setPageNumber, totalCount } = useProductList();
  console.log(currentPage);
  return (
    <Pagination
      activePage={currentPage} // 현재 페이지
      totalItemsCount={totalCount}
      itemsCountPerPage={15} // 총 아이템 갯수
      pageRangeDisplayed={5} // paginator의 페이지 범위
      prevPageText={"‹-"} // "이전"을 나타낼 텍스트
      nextPageText={"-›"} // "다음"을 나타낼 텍스트
      onChange={(pageNumber) => setPageNumber(pageNumber)} // 페이지 변경을 핸들링하는 함수
    />
  );
}
