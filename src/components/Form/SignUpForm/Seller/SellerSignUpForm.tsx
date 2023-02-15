import InputField from "components/Form/FormCommon/InputField/InputField";
import ValidationMessage from "components/Form/FormCommon/ValidationMessage/ValidationMessage";
import Form from "components/Form/FormCommon/Form/Form";
import MsgFromServer from "../MsgFromServer/MsgFromServer";
import useSellerSignUpForm from "components/Form/SignUpForm/Seller/hooks/useSellerSignUpForm";
import SubmitBtn from "components/Form/FormCommon/SubmitBtn/SubmitBtn";
import ConfirmPassword from "components/Form/SignUpForm/ConfirmPassword/ConfirmPassword";
import { useContext } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";
import * as S from "./SellerSignUpFormStyle";

export default function SellerSignUpForm() {
  const {
    onSubmit,
    validateUsernameMutate,
    validateRegistNumberMutate,
    msgFromServer,
  } = useSellerSignUpForm();

  const { errors, values }: any = useContext(FormContext);

  const usernameValue = values["username"];
  const usernameError = errors["username"];
  const registNumberValue = values["company_registration_number"];
  const registNumberError = errors["company_registration_number"];

  const usernameCheck = async () => {
    validateUsernameMutate(usernameValue);
  };
  const registNumberCheck = async () => {
    validateRegistNumberMutate(registNumberValue);
  };

  const btn_disabled_user = usernameError !== "";
  const btn_disabled_regi = registNumberError !== "";

  return (
    <Form onSubmit={onSubmit} className={"signup_seller"}>
      <S.FormBlock>
        <span>아이디</span>
        <S.UsernameContainer>
          <InputField
            name={"username"}
            type={"text"}
            className={"signup_seller username"}
            placeholder={"아이디를 입력하세요"}
          />
          <S.CheckBtn
            type={"button"}
            onClick={usernameCheck}
            disabled={btn_disabled_user}
          >
            <span>중복확인</span>
          </S.CheckBtn>
        </S.UsernameContainer>
        <ValidationMessage name={"username"} />
        <MsgFromServer type={"username"} msgFromServer={msgFromServer} />
        <span>비밀번호</span>
        <InputField
          name={"password"}
          type={"password"}
          className={"signup_seller password"}
          placeholder={"비밀번호를 입력하세요"}
        />
        <ValidationMessage name={"password"} />
        <MsgFromServer type={"password"} msgFromServer={msgFromServer} />
        <span>비밀번호 재확인</span>
        <InputField
          name={"password2"}
          type={"password"}
          className={"signup_seller password"}
          placeholder={"비밀번호를 다시 입력하세요"}
        />
        <ConfirmPassword />
        <span>이름</span>
        <InputField
          name={"name"}
          type={"text"}
          className={"signup_seller name"}
          placeholder={"이름을 입력하세요"}
        />
        <ValidationMessage name={"name"} />
        <span>휴대폰번호</span>
        <InputField
          name={"phone_number"}
          type={"text"}
          className={"signup_seller phone_number"}
          placeholder={"휴대폰번호를 숫자만 입력하세요"}
        />
        <ValidationMessage name={"phone_number"} />
        <MsgFromServer type={"phone_number"} msgFromServer={msgFromServer} />
        <span>사업자 등록번호</span>
        <S.C_NumberContainer>
          <InputField
            name={"company_registration_number"}
            type={"text"}
            className={"signup_seller company_registration_number"}
            placeholder={"사업자 등록번호 숫자 10자리를 입력하세요"}
          />
          <S.CheckBtn
            type={"button"}
            onClick={registNumberCheck}
            disabled={btn_disabled_regi}
          >
            인증
          </S.CheckBtn>
        </S.C_NumberContainer>
        <ValidationMessage name={"company_registration_number"} />
        <MsgFromServer
          type={"company_registration_number"}
          msgFromServer={msgFromServer}
        />
        <span>스토어 이름</span>
        <InputField
          name={"store_name"}
          type={"text"}
          className={"signup_seller store_name"}
          placeholder={"스토어 이름을 입력하세요"}
        />
        <ValidationMessage name={"store_name"} />
        <MsgFromServer type={"store_name"} msgFromServer={msgFromServer} />
        <SubmitBtn BtnText="회원가입" className={"signup_buyer"} />
      </S.FormBlock>
    </Form>
  );
}
