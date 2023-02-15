import InputField from "components/Form/FormCommon/InputField/InputField";
import ValidationMessage from "components/Form/FormCommon/ValidationMessage/ValidationMessage";
import Form from "components/Form/FormCommon/Form/Form";
import useOrderForm from "./hooks/useOrderForm";
import SelectPaymentType from "components/Form/OrderForm/SelectPaymentType/SelectPaymentType";
import SubmitConfrim from "components/Form/OrderForm/SubmitConfrim/SubmitConfrim";
import * as S from "./OrderForm.style";

type Props = {
  order_kind: "cart_order" | "cart_one_order" | "direct_order";
  product_id: number;
  quantity?: number;
  price?: number;
  total_product_price?: number;
  total_shipping_fee?: number;
  shipping_fee?: number;
};

export default function OrderForm(props: Props) {
  const { onSubmit } = useOrderForm(props);
  return (
    <Form onSubmit={onSubmit} className={"orderForm"}>
      <S.H2>배송 정보</S.H2>
      <S.InputWrapper>
        <span>수령인</span>
        <InputField
          name={"receiver"}
          type={"text"}
          className={"orderForm receiver"}
        />
        <ValidationMessage name={"receiver"} />
      </S.InputWrapper>
      <S.InputWrapper>
        <span>휴대폰번호</span>
        <InputField
          name={"receiver_phone_number"}
          type={"text"}
          className={"orderForm receiver_phone_number"}
        />
        <ValidationMessage name={"receiver_phone_number"} />
      </S.InputWrapper>
      <S.InputWrapper>
        <span>배송주소</span>
        <InputField
          name={"address"}
          type={"address"}
          className={"orderForm address"}
        />
        <ValidationMessage name={"address"} />
      </S.InputWrapper>
      <S.InputWrapper>
        <span>배송 메시지</span>
        <InputField
          name={"address_message"}
          type={"text"}
          className={"orderForm address_message"}
        />
        <ValidationMessage name={"address_message"} />
      </S.InputWrapper>
      <S.PaymentInfoContainer>
        <SelectPaymentType />
        <SubmitConfrim {...props} />
      </S.PaymentInfoContainer>
    </Form>
  );
}
