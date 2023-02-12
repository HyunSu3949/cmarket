import axiosInstance from "lib/axiosInstance";
import { useMutation } from "react-query";
import useCart from "components/Cart/useCart";
import { queryClient } from "lib/react-query/queryClient";

async function orderProduct(orderInfo: any) {
  const result = await axiosInstance.post("/order/", orderInfo);
  return result;
}

type Props = {
  order_kind: "cart_order" | "cart_one_order" | "direct_order";
  product_id: number;
  quantity?: number;
  price?: number;
  shipping_fee?: number;
};

export default function useOrderForm(props: Props) {
  const { mutate: orderMutate } = useMutation(
    (orderInfo) => orderProduct(orderInfo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );

  const { total_price } = useCart();
  const onSubmit = async (formValues: any) => {
    const { order_kind } = props;
    if (order_kind === "direct_order" || order_kind === "cart_one_order") {
      const { product_id, quantity = 0, price = 0, shipping_fee = 0 } = props;
      const total_price = quantity * price + shipping_fee;
      const orderInfo = {
        product_id,
        quantity,
        order_kind,
        total_price,
        ...formValues,
      };
      orderMutate(orderInfo);
    } else if (order_kind === "cart_order") {
      const orderInfo = {
        total_price,
        order_kind,
        ...formValues,
      };
      orderMutate(orderInfo);
    }
  };

  return {
    onSubmit,
  };
}
