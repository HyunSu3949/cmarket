import axiosInstance from "src/lib/axiosInstance";
import { useMutation } from "react-query";

async function orderProduct(orderInfo: any) {
  const result = await axiosInstance.post("/order/", orderInfo);
  return result;
}

export default function useOrderForm({ props }: any) {
  const { mutate: orderMutate } = useMutation(
    (orderInfo) => orderProduct(orderInfo),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const onSubmit = async (values: any) => {
    const { order_kind } = props;

    if (order_kind === ("direct_order" || "cart_one_order")) {
      const { product_id, quantity, price, shipping_fee } = props;
      const total_price = quantity * price + shipping_fee;
      const orderInfo = {
        product_id,
        quantity,
        order_kind,
        total_price,
        ...values,
      };
      orderMutate({ ...orderInfo });
    } else if (order_kind === "cart_order") {
    }
  };

  return {
    onSubmit,
  };
}
