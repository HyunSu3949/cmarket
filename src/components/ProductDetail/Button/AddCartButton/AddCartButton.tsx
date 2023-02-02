import axiosInstance from "src/lib/axiosInstance";
import { useMutation } from "react-query";
import { queryClient } from "src/lib/react-query/queryClient";

type ProductInfo = {
  product_id: number;
  quantity: number;
  check: Boolean;
};

async function addCart(productInfo: ProductInfo) {
  const result = await axiosInstance.post("/cart/", productInfo);
  return result;
}

export default function AddCartButton({ product_id, quantity }: any) {
  const productInfo = {
    product_id,
    quantity,
    check: true,
  };

  const { mutate } = useMutation((productInfo: any) => addCart(productInfo), {
    onSuccess: (data) => {
      return queryClient.invalidateQueries(["cart"]);
    },
  });

  return <button onClick={() => mutate(productInfo)}>장바구니</button>;
}
