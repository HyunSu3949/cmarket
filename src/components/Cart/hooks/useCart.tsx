import axiosInstance from "lib/axiosInstance";
import { useQuery, useMutation, useQueries, UseQueryResult } from "react-query";
import { queryClient } from "lib/react-query/queryClient";

type EditInfo = {
  product_id: number;
  quantity: number;
  is_active: boolean;
};

type EditProps = {
  cart_item_id: number;
  editInfo: EditInfo;
};

type CartItem = {
  my_cart: number;
  cart_item_id: number;
  product_id: number;
  quantity: number;
};

type ProductDetail = {
  product_id: number;
  created_at: string;
  updated_at: string;
  product_name: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
  seller: number;
  store_name: string;
};

async function getCartList() {
  const result = await axiosInstance.get(`/cart/`);
  return result;
}

async function editCartItem({ cart_item_id, editInfo }: EditProps) {
  const result = await axiosInstance.put(`/cart/${cart_item_id}/`, editInfo);
  return result;
}

async function deleteCartList(cart_item_id: number) {
  const result = await axiosInstance.delete(`/cart/${cart_item_id}/`);
  return result;
}

async function getProduct(product_id: number) {
  const result = await axiosInstance.get(`/products/${product_id}/`);
  return result;
}

export default function useCart() {
  const { data, isLoading } = useQuery(["cart"], getCartList);
  const cartList: CartItem[] = !!data ? data.data.results : [];

  const productDataList = useQueries(
    cartList.map((item) => ({
      queryKey: ["getProduct", item.product_id],
      queryFn: () => getProduct(item.product_id),
    }))
  );

  //상품 정보와 선택한 상품 수량(quantity)을 합친 최종 가공 배열입니다.
  let combinedCartInfoList: (CartItem & ProductDetail)[] = [];
  if (productDataList.every((data) => data.status === "success")) {
    const productInfoList = productDataList.map(
      (data: UseQueryResult<any, unknown>) => {
        return data.data.data;
      }
    );

    combinedCartInfoList = productInfoList.reduce(
      (acc, productInfoListItem) => {
        const foundItem = cartList.find(
          (cartListItem) =>
            cartListItem.product_id === productInfoListItem.product_id
        );
        if (foundItem) {
          acc.push({ ...productInfoListItem, ...foundItem });
        }
        return acc;
      },
      []
    );
  }
  let total_price = 0;
  let total_product_price = 0;
  let total_shipping_fee = 0;

  if (combinedCartInfoList.length) {
    total_price = combinedCartInfoList.reduce(
      (acc: number, item: CartItem & ProductDetail) => {
        const { quantity, price, shipping_fee } = item;
        return acc + (quantity * price + shipping_fee);
      },
      0
    );

    total_shipping_fee = combinedCartInfoList.reduce(
      (acc: number, item: CartItem & ProductDetail) => {
        return acc + item.shipping_fee;
      },
      0
    );

    total_product_price = total_price - total_shipping_fee;
  }

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
    combinedCartInfoList,
    total_price,
    total_shipping_fee,
    total_product_price,
    isLoading,
    editCartMutate,
    deleteMutate,
  };
}
