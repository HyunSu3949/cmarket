import { useState } from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

async function fetchProduct(product_id: number | undefined) {
  const result = await axiosInstance.get(`/products/${product_id}/`);
  return result;
}

type ProductInfo = {
  product_id: number;
  quantity: number;
  check: Boolean;
};

async function addCart(productInfo: ProductInfo) {
  const result = await axiosInstance.post("/cart", { productInfo });
  return result;
}

async function getCartList(product_id: number) {
  const result = await axiosInstance(`/cart/`);
  return result;
}

type Props = {
  product_id: number | undefined;
  order_kind: string;
};

export default function useProductDetail({ product_id, order_kind }: Props) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    ["product", product_id],
    () => fetchProduct(product_id),
    {
      onError: () => {},
    }
  );

  const handleAddCart = () => {};

  const handlePurchase = () => {
    navigate(`/payment`, {
      state: {
        ...data?.data,
        order_kind,
        quantity,
      },
    });
  };

  return {
    data,
    isLoading,
    quantity,
    setQuantity,
    handleAddCart,
    handlePurchase,
  };
}
