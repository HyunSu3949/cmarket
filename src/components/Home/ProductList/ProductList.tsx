import useProductList from "src/components/Home/ProductList/useProductList";
import Product from "src/components/Home/Product/Product";
import * as S from "./ProductListStyle";

export default function ProductList() {
  const {
    data,
    isLoading,
    currentPage,
    goToNextPage,
    goToPrevPage,
    maxProductPage,
  } = useProductList();

  if (isLoading) return <div>...</div>;
  return (
    <>
      <S.List>
        {data.data.results.map((item: any) => (
          <Product key={item.product_id} {...item} />
        ))}
      </S.List>
      <div>
        <button disabled={currentPage <= 1} onClick={goToPrevPage}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentPage >= maxProductPage} onClick={goToNextPage}>
          Next page
        </button>
      </div>
      <hr />
    </>
  );
}
