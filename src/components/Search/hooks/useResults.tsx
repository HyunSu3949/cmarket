import { useQuery } from "react-query";
import axiosInstance from "lib/axiosInstance";

async function searchProduct(keyword: string) {
  const result = await axiosInstance.get(`/products/?search=${keyword}`);
  return result;
}
export const useResults = (keyword: string) => {
  return useQuery(["keyword", keyword], () => searchProduct(keyword), {
    enabled: !!keyword,
    select: (data) => data.data.results.slice(0, 10),
  });
};
