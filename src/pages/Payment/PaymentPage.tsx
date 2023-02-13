import { useLocation } from "react-router-dom";
import FormProvider from "components/Form/FormCommon/FormProvider";
import OrderForm from "components/Form/OrderForm/OrderForm";
import { orderValidate } from "components/Form/utils/formValidation";
import OrderProductList from "components/Payment/OrderProductList/OrderProductList";
import OrderProduct from "components/Payment/OrderProduct/OrderProduct";
import DirectOrderProduct from "components/Payment/DirectOrderProduct/DirectOrderProduct";
import useCart from "components/Cart/hooks/useCart";
import * as S from "./PaymentPage.style";
import { toLocaleString } from "components/Form/utils/toLocaleString";
import useDocumentTitle from "components/hooks/useDocumentTitle";

type Props = {
  order_kind: "cart_order" | "cart_one_order" | "direct_order";
  product_id: number;
  quantity: number;
  price: number;
  shipping_fee: number;
};

export default function PaymentPage() {
  useDocumentTitle({
    title: "주문하기 - 호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "호두마켓 주문하기 화면",
  });

  const location = useLocation();
  const props = location.state;
  const { order_kind, product_id, quantity, price, shipping_fee }: Props =
    props;

  const { total_product_price, total_shipping_fee } = useCart();

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

  const total_price = {
    cart_order: total_product_price + total_shipping_fee,
    cart_one_order: price * quantity + shipping_fee,
    direct_order: price * quantity + shipping_fee,
  };

  const orderFormProps = {
    cart_order: {
      order_kind: "cart_order",
      total_product_price,
      total_shipping_fee,
    },
    cart_one_order: props,
    direct_order: props,
  };
  return (
    <S.Wrapper>
      <S.OrderListWrapper>
        {returnComponent[order_kind]}
        <S.TotalTextBox>
          <span>총 상품금액</span>
          <span>{toLocaleString(total_price[order_kind])}원</span>
        </S.TotalTextBox>
      </S.OrderListWrapper>
      <FormProvider initialValues={formValues} validate={validate}>
        <OrderForm {...orderFormProps[order_kind]}></OrderForm>
      </FormProvider>
    </S.Wrapper>
  );
}
