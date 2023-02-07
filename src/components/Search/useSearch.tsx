import { useState, useEffect } from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery } from "react-query";

async function searchProduct(keyword: string) {
  const result = await axiosInstance.get(`/products/?search=${keyword}`);
  return result;
}

export default function useSearch() {
  const [keyword, setKeyword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  /* 
  const { data } = useQuery(["search"], () => searchProduct(keyword), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const searched = data!! && data.data.results; */
  return { setKeyword, onChange };
}
