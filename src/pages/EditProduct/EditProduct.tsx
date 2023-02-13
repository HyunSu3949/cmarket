import FormProvider from "components/Form/FormCommon/FormProvider";
import EditForm from "components/Form/EditForm/EditForm";
import { uploadValidate } from "components/Form/utils/formValidation";
import { useLocation } from "react-router-dom";

export default function EditProduct() {
  const location = useLocation();
  const {
    product_name,
    image,
    price,
    shipping_method,
    shipping_fee,
    stock,
    product_info,
    product_id,
  } = location.state;

  const initialValues = {
    product_name,
    image,
    price,
    shipping_method,
    shipping_fee,
    stock,
    product_info,
    product_id,
  };
  const validate = uploadValidate;

  return (
    <>
      <FormProvider initialValues={initialValues} validate={validate}>
        <EditForm />
      </FormProvider>
    </>
  );
}
