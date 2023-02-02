import React from "react";
import axiosInstance from "src/lib/axiosInstance";
import { useQuery, useMutation } from "react-query";
import { queryClient } from "src/lib/react-query/queryClient";

async function getCartList() {
  const result = await axiosInstance.get(`/cart/`);
  return result;
}

type EditInfo = {
  product_id: number;
  quantity: number;
  is_active: boolean; // 장바구니 내 상품 활성화 버튼, 같이 보내지 않으면 False
};
type EditProps = {
  cart_item_id: number;
  editInfo: EditInfo;
};
async function editCartItem({ cart_item_id, editInfo }: EditProps) {
  const result = await axiosInstance.put(`/cart/${cart_item_id}/`, editInfo);
  return result;
}

async function deleteCartList(cart_item_id: number) {
  const result = await axiosInstance.delete(`/cart/${cart_item_id}/`);
  return result;
}
/* 
async function orderProduct(order) {
  const result = await axiosInstance.post('/order/',)
} */
export default function useCart() {
  const { data: cartList } = useQuery(["cart"], getCartList);

  const { mutate: editCartMutate } = useMutation(
    ({ cart_item_id, editInfo }: EditProps) =>
      editCartItem({ cart_item_id, editInfo }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );

  const { mutate: deleteMutate } = useMutation(
    (cart_item_id: number) => deleteCartList(cart_item_id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );

  return {
    cartList,
    editCartMutate,
    deleteMutate,
  };
}
