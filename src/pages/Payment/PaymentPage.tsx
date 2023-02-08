import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormProvider from "src/components/Form/FormCommon/FormProvider";
import OrderForm from "src/components/Form/OrderForm/OrderForm";
import { orderValidate } from "./../../components/Form/utils/formValidation";
import OrderProductList from "./../../components/Payment/OrderProductList/OrderProductList";
import OrderProduct from "src/components/Payment/OrderProduct/OrderProduct";
import DirectOrderProduct from "src/components/Payment/DirectOrderProduct/DirectOrderProduct";
type Props = {
  order_kind: "cart_order" | "cart_one_order" | "direct_order";
  product_id: number;
  quantity: number;
};

export default function PaymentPage() {
  const location = useLocation();
  const props = { ...location.state };

  const { order_kind, product_id, quantity }: Props = props;

  const formValues = {
    receiver: "",
    receiver_phone_number: "",
    address: "",
    address_message: "",
    payment_method: "CARD",
  };

  const validate = orderValidate;

  const returnComponent = {
    cart_order: <OrderProductList />,
    cart_one_order: <OrderProduct product_id={product_id} />,
    direct_order: (
      <DirectOrderProduct product_id={product_id} quantity={quantity} />
    ),
  };

  return (
    <div>
      <div>주문목록</div>
      {returnComponent[order_kind]}
      <FormProvider initialValues={formValues} validate={validate}>
        <OrderForm {...props}></OrderForm>
      </FormProvider>
    </div>
  );
}
