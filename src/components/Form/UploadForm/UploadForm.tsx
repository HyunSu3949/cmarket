import InputField from "src/components/Form/InputField";
import ValidationMessage from "src/components/Form/ValidationMessage";
import Form from "src/components/Form/Form";
import SubmitBtn from "src/components/Form/SubmitBtn";
import SelectShippingMethod from "src/components/Form/UploadForm/SelectShippingMethod";
import useUploadForm from "src/components/Form/UploadForm/useUploadForm";

export default function UploadForm() {
  const { onSubmit } = useUploadForm();

  return (
    <Form onSubmit={onSubmit}>
      상품명
      <InputField name={"product_name"} type={"text"} />
      <ValidationMessage name={"product_name"} />
      이미지
      <InputField name={"image"} type={"text"} />
      <ValidationMessage name={"image"} />
      판매가
      <InputField name={"price"} type={"text"} />
      <ValidationMessage name={"price"} />
      배송방법
      <SelectShippingMethod />
      기본 배송비
      <InputField name={"shipping_fee"} type={"text"} />
      <ValidationMessage name={"shipping_fee"} />
      재고
      <InputField name={"stock"} type={"text"} />
      <ValidationMessage name={"stock"} />
      상품 정보
      <InputField name={"products_info"} type={"text"} />
      <ValidationMessage name={"products_info"} />
      <SubmitBtn BtnText="상품 등록" />
    </Form>
  );
}
