import SignUpForm from "src/components/Form/SignUpForm/Buyer/SignUpForm";
import { useState } from "react";
import { signUpValidate } from "./../../components/Form/utils/formValidation";
import FormProvider from "src/components/Form/FormProvider";
import SellerSignUpForm from "src/components/Form/SignUpForm/Seller/SellerSignUpForm";

export default function SignUpPage() {
  const [type, setType] = useState("BUYER");

  const initialValues_buyer = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
  };
  const initialValues_seller = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    company_registration_number: "",
    store_name: "",
  };
  const validate = signUpValidate;

  return (
    <div>
      <div>
        <button onClick={() => setType("BUYER")} type="button">
          구매회원가입
        </button>
        <button onClick={() => setType("SELLER")} type="button">
          판매회원가입
        </button>
      </div>
      {type === "BUYER" ? (
        <FormProvider initialValues={initialValues_buyer} validate={validate}>
          <SignUpForm />
        </FormProvider>
      ) : (
        <FormProvider initialValues={initialValues_seller} validate={validate}>
          <SellerSignUpForm />
        </FormProvider>
      )}
    </div>
  );
}
