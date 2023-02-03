import React from "react";
import OrderProducts from "src/components/Payment/OrderProduct/OrderProduct";
import useCart from "src/components/Cart/useCart";

export default function OrderProductList() {
  const { combinedCartInfoList } = useCart();
  return (
    <ul>
      {combinedCartInfoList.map((item: any) => (
        <OrderProducts key={item.product_id} {...item} />
      ))}
    </ul>
  );
}
