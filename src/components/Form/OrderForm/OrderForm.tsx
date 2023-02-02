import React from "react";
import InputField from "src/components/Form/InputField";
import ValidationMessage from "src/components/Form/ValidationMessage";
import Form from "src/components/Form/Form";
import useOrderForm from "./useOrderForm";
import SelectPaymentType from "src/components/Form/OrderForm/SelectPaymentType";
import SubmitConfrim from "src/components/Form/OrderForm/SubmitConfrim";

export default function OrderForm(props: any) {
  const { onSubmit } = useOrderForm(props);
  return (
    <Form onSubmit={onSubmit}>
      <p>배송지 정보</p>
      수령인
      <InputField name={"receiver"} type={"text"} />
      <ValidationMessage name={"receiver"} />
      휴대폰번호
      <InputField name={"receiver_phone_number"} type={"text"} />
      <ValidationMessage name={"receiver_phone_number"} />
      배송주소
      <InputField name={"address"} type={"address"} />
      <ValidationMessage name={"address"} />
      배송 메시지
      <InputField name={"address_message"} type={"text"} />
      <ValidationMessage name={"address_message"} />
      결제수단
      <SelectPaymentType />
      <SubmitConfrim />
    </Form>
  );
}
