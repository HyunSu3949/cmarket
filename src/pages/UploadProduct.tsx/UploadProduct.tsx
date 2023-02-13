import FormProvider from "components/Form/FormCommon/FormProvider";
import UploadForm from "components/Form/UploadForm/UploadForm";
import { uploadValidate } from "components/Form/utils/formValidation";
import useDocumentTitle from "components/hooks/useDocumentTitle";

export default function UploadProduct() {
  useDocumentTitle({
    title: "상품 등록 - 호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "호두마켓 상품 등록 화면",
  });
  const initialValues = {
    product_name: "",
    image: "",
    price: 0,
    shipping_method: "PARCEL",
    shipping_fee: 0,
    stock: 0,
    product_info: "",
  };
  const validate = uploadValidate;
  return (
    <main>
      <FormProvider initialValues={initialValues} validate={validate}>
        <UploadForm />
      </FormProvider>
    </main>
  );
}
