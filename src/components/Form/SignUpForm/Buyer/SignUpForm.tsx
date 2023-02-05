import InputField from "src/components/Form/InputField";
import ValidationMessage from "src/components/Form/ValidationMessage";
import Form from "src/components/Form/Form";
import MsgFromServer from "../MsgFromServer";
import * as S from "./SignUpFormStyle";
import useSignUpForm from "src/components/Form/SignUpForm/Buyer/useSignUpForm";
import SubmitBtn from "src/components/Form/SubmitBtn";
import ConfirmPassword from "src/components/Form/SignUpForm/ConfirmPassword";
import { useContext } from "react";
import { FormContext } from "src/components/Form/FormProvider";

export default function SignUpForm() {
  const {
    onSubmit,
    validateUsernameMutate,
    msgFromServer: message,
  } = useSignUpForm();

  const { errors, values }: any = useContext(FormContext);

  const handleClick = async () => {
    const usernameValue = values["username"];
    validateUsernameMutate(usernameValue);
  };

  const usernameError = errors["username"];
  const disabled = usernameError !== "";

  return (
    <Form onSubmit={onSubmit}>
      <S.FormBlock>
        아이디
        <InputField name={"username"} type={"text"} />
        <ValidationMessage name={"username"} />
        <MsgFromServer type={"username"} message={message["username"]} />
        <button type={"button"} onClick={handleClick} disabled={disabled}>
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
        <SubmitBtn BtnText="회원가입" />
      </S.FormBlock>
    </Form>
  );
}
