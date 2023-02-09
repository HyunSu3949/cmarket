import axiosInstance from "src/lib/axiosInstance";
import { useMutation } from "react-query";
import useCart from "src/components/Cart/useCart";

async function orderProduct(orderInfo: any) {
  const result = await axiosInstance.post("/order/", orderInfo);
  return result;
}

type Props = {
  order_kind: "cart_order" | "cart_one_order" | "direct_order";
  product_id: number;
  quantity?: number;
  product_price?: number;
  shipping_fee?: number;
};

export default function useOrderForm(props: Props) {
  const { mutate: orderMutate } = useMutation(
    (orderInfo) => orderProduct(orderInfo),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const { total_price } = useCart();
  const onSubmit = async (formValues: any) => {
    const { order_kind } = props;

    if (order_kind === ("direct_order" || "cart_one_order")) {
      const {
        product_id,
        quantity = 0,
        product_price = 0,
        shipping_fee = 0,
      } = props;
      const total_price = quantity * product_price + shipping_fee;
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
