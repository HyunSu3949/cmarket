import { useState, useCallback } from "react";
import axiosInstance from "lib/axiosInstance";
import { useQuery } from "react-query";
import { debounce } from "./../util/debounce";

async function searchProduct(keyword: string) {
  const result = await axiosInstance.get(`/products/?search=${keyword}`);
  return result;
}

export default function useSearch() {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debounce(setKeyword(e.target.value), 500);
    },
    [keyword]
  );

  const onBlurInput = () => {
    setTimeout(() => setKeyword(""), 1000);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { data, status } = useQuery(
    ["search", keyword],
    () => searchProduct(keyword),
    {
      enabled: !!keyword,
      select: (data) => data.data.results.slice(0, 5),
      onSuccess: (data) => {},
    }
  );

  const searchedData = data!! && data;

  return {
    setKeyword,
    onChangeInput,
    onBlurInput,
    onSubmit,
    searchedData,
    status,
    keyword,
  };
}
