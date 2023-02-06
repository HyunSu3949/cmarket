import FormProvider from "src/components/Form/FormProvider";
import UploadForm from "src/components/Form/UploadForm/UploadForm";
import { uploadValidate } from "src/components/Form/utils/formValidation";

export default function EditProduct() {
  const initialValues = {
    product_name: "",
    image: "",
    price: 0,
    shipping_method: "PARCEL",
    shipping_fee: 0,
    stock: 0,
    product_info: "",
    token: localStorage.getItem("token"),
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
