import { useState, useEffect } from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery } from "react-query";
import { queryClient } from "src/lib/react-query/queryClient";

async function fetchProduct(currentPage: number) {
  const result = axiosInstance.get(`/products/?page=${currentPage}`);

  return result;
}

export default function useProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery(["products", currentPage], () =>
    fetchProduct(currentPage)
  );

  const productList = data?.data.results || [];
  const totalCount = data?.data.count || 0;

  useEffect(() => {
    const maxProductPage = Math.ceil(totalCount / 15);
    if (currentPage < maxProductPage) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery(["products", nextPage], () =>
        fetchProduct(nextPage)
      );
    }
  }, [currentPage, queryClient, data]);

  const setPageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return {
    productList,
    isLoading,
    currentPage,
    setPageNumber,
    totalCount,
  };
}
