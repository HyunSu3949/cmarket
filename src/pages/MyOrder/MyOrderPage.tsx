import React from "react";
import useMyOrder from "./../../components/MyOrder/hooks/useMyOrder";

export default function MyOrderPage() {
  const { data } = useMyOrder();
  return <div></div>;
}
