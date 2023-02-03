import { useState } from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery } from "react-query";

async function fetchProduct(product_id: number | undefined) {
  const result = await axiosInstance.get(`/products/${product_id}/`);
  return result;
}

type Props = {
  product_id: number | undefined;
};

export default function useProductDetailPage({ product_id }: Props) {
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading } = useQuery(
    ["product", product_id],
    () => fetchProduct(product_id),
    {
      onError: () => {},
    }
  );

  return {
    data,
    isLoading,
    quantity,
    setQuantity,
  };
}
