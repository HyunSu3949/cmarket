import InputField from "src/components/Form/FormCommon/InputField";
import ValidationMessage from "src/components/Form//FormCommon/ValidationMessage";
import Form from "src/components/Form/FormCommon/Form";
import useLoginForm from "./useLoginForm";
import SubmitBtn from "src/components/Form//FormCommon/SubmitBtn";
import * as S from "./LoginFormStyle";
import { useContext } from "react";
import { FormContext } from "src/components/Form/FormCommon/FormProvider";

export default function LoginForm() {
  const { msgFromServer, onSubmit, setLoginType, loginType } = useLoginForm();
  const { errors }: any = useContext(FormContext);
  const showErrorFormServer = Object.values(errors).every(
    (item) => item === ""
  );

  return (
    <S.Wrapper>
      <S.BtnWrapper>
        <S.Button
          id="BUYER"
          type="button"
          name={loginType}
          onClick={() => setLoginType("BUYER")}
        >
          구매회원 로그인
        </S.Button>
        <S.Button
          id="SELLER"
          type="button"
          name={loginType}
          onClick={() => setLoginType("SELLER")}
        >
          판매회원 로그인
        </S.Button>
      </S.BtnWrapper>
      <Form onSubmit={onSubmit} className={"loginForm"}>
        <InputField
          type="username"
          name="username"
          className={"loginForm username"}
        />
        <ValidationMessage name="username" />
        <InputField
          type="password"
          name="password"
          className={"loginForm password"}
        />
        <ValidationMessage name="password" />
        {showErrorFormServer && <S.ErrorMsg>{msgFromServer}</S.ErrorMsg>}
        <SubmitBtn BtnText={"로그인"} className={"loginForm"} />
      </Form>
    </S.Wrapper>
  );
}
