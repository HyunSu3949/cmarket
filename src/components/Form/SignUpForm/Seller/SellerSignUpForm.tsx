import InputField from "src/components/Form/InputField";
import ValidationMessage from "src/components/Form/ValidationMessage";
import Form from "src/components/Form/Form";
import MsgFromServer from "../MsgFromServer";
import useSellerSignUpForm from "src/components/Form/SignUpForm/Seller/useSellerSignUpForm";
import SubmitBtn from "src/components/Form/SubmitBtn";
import ConfirmPassword from "src/components/Form/SignUpForm/ConfirmPassword";
import { useContext } from "react";
import { FormContext } from "src/components/Form/FormProvider";
import * as S from "./SellerSignUpFormStyle";

export default function SellerSignUpForm() {
  const {
    onSubmit,
    validateUsernameMutate,
    validateRegistNumberMutate,
    msgFromServer: message,
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
    console.log("reg");

    validateRegistNumberMutate(registNumberValue);
  };

  const disabled_user = usernameError !== "";
  const disabled_regi = registNumberError !== "";

  return (
    <Form onSubmit={onSubmit}>
      아이디
      <S.FormBlock>
        <InputField name={"username"} type={"text"} />
        <ValidationMessage name={"username"} />
        <MsgFromServer type={"username"} message={message["username"]} />
        <button
          type={"button"}
          onClick={usernameCheck}
          disabled={disabled_user}
        >
          중복
        </button>
        비밀번호
        <InputField name={"password"} type={"password"} />
        <ValidationMessage name={"password"} />
        <MsgFromServer type={"password"} message={message["password"]} />
        비밀번호 재확인
        <InputField name={"password2"} type={"password"} />
        <ConfirmPassword />
        이름
        <InputField name={"name"} type={"text"} />
        <ValidationMessage name={"name"} />
        휴대폰번호
        <InputField name={"phone_number"} type={"text"} />
        <ValidationMessage name={"phone_number"} />
        <MsgFromServer
          type={"phone_number"}
          message={message["phone_number"]}
        />
        사업자 등록번호
        <InputField name={"company_registration_number"} type={"text"} />
        <ValidationMessage name={"company_registration_number"} />
        <MsgFromServer
          type={"company_registration_number"}
          message={message["company_registration_number"]}
        />
        <button
          type={"button"}
          onClick={registNumberCheck}
          disabled={disabled_regi}
        >
          중복
        </button>
        스토어 이름
        <InputField name={"store_name"} type={"text"} />
        <ValidationMessage name={"store_name"} />
        <MsgFromServer type={"store_name"} message={message["store_name"]} />
        <SubmitBtn BtnText="회원가입" />
      </S.FormBlock>
    </Form>
  );
}
