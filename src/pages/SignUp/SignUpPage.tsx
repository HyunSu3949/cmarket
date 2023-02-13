import { useState } from "react";
import SignUpForm from "components/Form/SignUpForm/Buyer/SignUpForm";
import { signUpValidate } from "components/Form/utils/formValidation";
import FormProvider from "components/Form/FormCommon/FormProvider";
import SellerSignUpForm from "components/Form/SignUpForm/Seller/SellerSignUpForm";
import * as S from "./SignUpPage.style";
import logo from "assets/images/Logo-hodu.png";
import { Link } from "react-router-dom";
import useDocumentTitle from "components/hooks/useDocumentTitle";

export default function SignUpPage() {
  useDocumentTitle({
    title: "회원가입 - 호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "호두마켓 회원가입 화면",
  });

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
    <S.Wrapper>
      <Link to={"/"}>
        <S.Img src={logo} alt="로고 이미지" />
      </Link>
      <S.FormWrapper>
        <S.BtnWrapper>
          <S.Button
            onClick={() => setType("BUYER")}
            type="button"
            id={"BUYER"}
            name={type}
          >
            구매회원가입
          </S.Button>
          <S.Button
            onClick={() => setType("SELLER")}
            type="button"
            id={"SELLER"}
            name={type}
          >
            판매회원가입
          </S.Button>
        </S.BtnWrapper>
        {type === "BUYER" ? (
          <FormProvider initialValues={initialValues_buyer} validate={validate}>
            <SignUpForm />
          </FormProvider>
        ) : (
          <FormProvider
            initialValues={initialValues_seller}
            validate={validate}
          >
            <SellerSignUpForm />
          </FormProvider>
        )}
      </S.FormWrapper>
    </S.Wrapper>
  );
}
