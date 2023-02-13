import InputField from "components/Form//FormCommon/InputField";
import ValidationMessage from "components/Form//FormCommon/ValidationMessage";
import Form from "components/Form/FormCommon/Form";
import MsgFromServer from "../MsgFromServer";
import * as S from "./SignUpFormStyle";
import useSignUpForm from "components/Form/SignUpForm/Buyer/useSignUpForm";
import SubmitBtn from "components/Form//FormCommon/SubmitBtn";
import ConfirmPassword from "components/Form/SignUpForm/ConfirmPassword";
import { useContext, useEffect } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";

export default function SignUpForm() {
  const { errors, values }: any = useContext(FormContext);
  const { onSubmit, validateUsernameMutate, msgFromServer } = useSignUpForm();

  useEffect(() => {
    console.log(msgFromServer);
  }, [msgFromServer]);
  const handleClick = async () => {
    const usernameValue = values["username"];
    validateUsernameMutate(usernameValue);
  };

  const usernameError = errors["username"];
  const disabled = usernameError !== "";

  return (
    <Form onSubmit={onSubmit} className={"signup_buyer"}>
      <S.FormBlock>
        <span>아이디</span>
        <S.UsernameContainer>
          <InputField
            name={"username"}
            type={"text"}
            className={"signup_buyer username"}
          />
          <S.CheckBtn type={"button"} onClick={handleClick} disabled={disabled}>
            <span>중복확인</span>
          </S.CheckBtn>
        </S.UsernameContainer>
        <ValidationMessage name={"username"} />
        <MsgFromServer type={"username"} msgFromServer={msgFromServer} />
        <span>비밀번호</span>
        <InputField
          name={"password"}
          type={"password"}
          className={"signup_buyer password"}
        />
        <ValidationMessage name={"password"} />
        <MsgFromServer type={"password"} msgFromServer={msgFromServer} />
        <span>비밀번호 재확인</span>
        <InputField
          name={"password2"}
          type={"password"}
          className={"signup_buyer password"}
        />
        <ConfirmPassword />
        <span>이름</span>
        <InputField
          name={"name"}
          type={"text"}
          className={"signup_buyer name"}
        />
        <ValidationMessage name={"name"} />
        <span>휴대폰번호</span>
        <InputField
          name={"phone_number"}
          type={"text"}
          className={"signup_buyer phone_number"}
        />
        <ValidationMessage name={"phone_number"} />
        <MsgFromServer type={"phone_number"} msgFromServer={msgFromServer} />
        <SubmitBtn BtnText="회원가입" className={"signup_buyer"} />
      </S.FormBlock>
    </Form>
  );
}
