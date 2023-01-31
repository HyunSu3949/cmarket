import SignUpForm from "src/components/Form/SignUpForm/Buyer/SignUpForm";
import { useState } from "react";
import { signUpValidate } from "./../../components/Form/utils/formValidation";
import FormProvider from "src/components/Form/FormProvider";

export default function SignUpPage() {
  const [type, setType] = useState("BUYER");

  const initialValues_buyer = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
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
      ) : null}
    </div>
  );
}
