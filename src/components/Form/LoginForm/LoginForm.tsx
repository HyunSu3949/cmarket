import InputField from "components/Form/FormCommon/InputField/InputField";
import ValidationMessage from "components/Form/FormCommon/ValidationMessage/ValidationMessage";
import Form from "components/Form/FormCommon/Form/Form";
import useLoginForm from "./hooks/useLoginForm";
import SubmitBtn from "components/Form//FormCommon/SubmitBtn/SubmitBtn";
import * as S from "./LoginFormStyle";
import { useContext } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";

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
          placeholder={"아이디를 입력하세요"}
        />
        <ValidationMessage name="username" />
        <InputField
          type="password"
          name="password"
          className={"loginForm password"}
          placeholder={"비밀번호를 입력하세요"}
        />
        <ValidationMessage name="password" />
        {showErrorFormServer && <S.ErrorMsg>{msgFromServer}</S.ErrorMsg>}
        <SubmitBtn BtnText={"로그인"} className={"loginForm"} />
      </Form>
    </S.Wrapper>
  );
}
