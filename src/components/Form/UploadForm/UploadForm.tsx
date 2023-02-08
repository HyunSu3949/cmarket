import InputField from "src/components/Form/FormCommon/InputField";
import ValidationMessage from "src/components/Form/FormCommon/ValidationMessage";
import SubmitBtn from "src/components/Form/FormCommon/SubmitBtn";
import SelectShippingMethod from "src/components/Form/UploadForm/SelectShippingMethod";
import useUploadForm from "src/components/Form/UploadForm/useUploadForm";
import InputFileField from "src/components/Form/UploadForm/InputFileField";
import FormWithImg from "src/components/Form/UploadForm/FormWithImg";
export default function UploadForm() {
  const { onSubmit } = useUploadForm();

  return (
    <FormWithImg onSubmit={onSubmit}>
      상품명
      <InputField name={"product_name"} type={"text"} />
      <ValidationMessage name={"product_name"} />
      이미지
      <InputFileField name={"image"} />
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
      <InputField name={"product_info"} type={"text"} />
      <ValidationMessage name={"product_info"} />
      <SubmitBtn BtnText="상품 등록" />
    </FormWithImg>
  );
}
