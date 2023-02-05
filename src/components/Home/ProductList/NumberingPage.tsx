import React from "react";
import useProductList from "./useProductList";

export default function NumberingPage() {
  const { currentPage, goToNextPage, goToPrevPage, maxProductPage } =
    useProductList();
  return <div></div>;
}
