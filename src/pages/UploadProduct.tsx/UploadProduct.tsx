import FormProvider from "components/Form/FormCommon/FormProvider";
import UploadForm from "components/Form/UploadForm/UploadForm";
import { uploadValidate } from "components/Form/utils/formValidation";

export default function UploadProduct() {
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
    <>
      <FormProvider initialValues={initialValues} validate={validate}>
        <UploadForm />
      </FormProvider>
    </>
  );
}
