import { useState, useEffect } from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery } from "react-query";

async function searchProduct(keyword: string) {
  const result = await axiosInstance(`/products/?serach=${keyword}`);
  return result;
}

export default function useSearch() {
  const [keyword, setKeyword] = useState("맥북");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useQuery(["search"], () => searchProduct(keyword), {
    onSuccess: (data) => {},
  });

  return { setKeyword, onChange };
}
