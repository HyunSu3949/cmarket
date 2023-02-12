import axiosInstance from "lib/axiosInstance";
import { useQuery, useMutation } from "react-query";
import { queryClient } from "lib/react-query/queryClient";

async function fetchSellerProduct() {
  const result = await axiosInstance.get("/seller/");
  return result;
}

async function deleteProduct(product_id: number) {
  const result = await axiosInstance.delete(`/products/${product_id}/`);
  return result;
}
export default function useSeller() {
  const { data } = useQuery(["sellerProducts"], fetchSellerProduct);

  const productList = !!data ? data.data.results.map((item: any) => item) : [];

  const { mutate: deleteProductMutate } = useMutation(
    (product_id: number) => deleteProduct(product_id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["sellerProducts"]);
      },
    }
  );
  return {
    productList,
    deleteProductMutate,
  };
}
