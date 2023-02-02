import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormProvider from "src/components/Form/FormProvider";
import OrderForm from "src/components/Form/OrderForm/OrderForm";
import OrderProducts from "src/components/Payment/OrderProducts/OrderProducts";
import { orderValidate } from "./../../components/Form/utils/formValidation";

export default function PaymentPage() {
  const location = useLocation();

  const [props, setProps] = useState({
    price: 0,
    product_name: "",
    quantity: 0,
    seller_store: "",
    image: "",
    product_id: "",
    order_kind: "",
    shipping_fee: 0,
  });

  const initialValues = {
    receiver: "",
    receiver_phone_number: "",
    address: "",
    address_message: "",
    payment_method: "CARD",
  };

  const validate = orderValidate;

  useEffect(() => {
    console.log(location.state);

    const { order_kind } = location.state;
    if (order_kind === ("direct_order" || "cart_one_order")) {
      setProps({
        ...props,
        ...location.state,
      });
    } else if (order_kind === "cart_order") {
    }
  }, []);

  return (
    <div>
      <div>주문목록</div>
      <OrderProducts {...props} />
      <FormProvider initialValues={initialValues} validate={validate}>
        <OrderForm props={props}></OrderForm>
      </FormProvider>
    </div>
  );
}
