import { useState } from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

async function fetchProduct(product_id: number) {
  console.log(product_id);
  const result = await axiosInstance.get(`/products/${product_id}/`);
  return result;
}

type Props = {
  product_id: number;
};

export default function useProductDetailPage({ product_id }: Props) {
  const navigate = useNavigate();
  if (product_id === 0) {
    navigate(-1);
  }

  const [quantity, setQuantity] = useState(1);

  const { data } = useQuery(
    ["product", product_id],
    () => fetchProduct(product_id),
    {
      onError: () => {},
    }
  );

  const productData = !!data && data.data;
  return {
    productData,
    quantity,
    setQuantity,
  };
}
