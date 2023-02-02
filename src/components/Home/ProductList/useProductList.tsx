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
  const [maxProductPage, setMaxProductPage] = useState(5);
  const { data, isError, error, isLoading }: any = useQuery(
    ["products", currentPage],
    () => fetchProduct(currentPage)
  );

  useEffect(() => {
    if (data && !isError && !isLoading) {
      const totalProductCount = data.data.count;
      const maxPage = Math.ceil(totalProductCount / 15);
      setMaxProductPage(maxPage);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage < maxProductPage) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery(["products", nextPage], () =>
        fetchProduct(nextPage)
      );
    }
  }, [currentPage, queryClient, data]);

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return {
    data,
    isError,
    error,
    isLoading,
    currentPage,
    maxProductPage,
    goToNextPage,
    goToPrevPage,
  };
}
