import LoginForm from "components/Form/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { loginValidate } from "components/Form/utils/formValidation";
import FormProvider from "components/Form/FormCommon/FormProvider";
import { useContext } from "react";
import { AuthContext } from "lib/auth/AuthProvider/AuthProvider";
import logo from "assets/images/Logo-hodu.png";
import * as S from "./LoginPage.style";
import useDocumentTitle from "pages/hooks/useDocumentTitle";

export default function LoginPage() {
  useDocumentTitle({
    title: "로그인-호두마켓",
    focusNodeSelector: "main",
    focusNodeTitle: "로그인 화면",
  });

  const navigate = useNavigate();
  const { isLogedIn, loginType } = useContext(AuthContext);
  if (isLogedIn) {
    navigate("/");
  }
  const initialValues =
    loginType === "BUYER"
      ? {
          username: "cmarket1",
          password: "cmarket1",
        }
      : {
          username: "cmarket2",
          password: "cmarket2",
        };
  const validate = loginValidate;

  return (
    <S.Wrapper>
      <Link to={"/"}>
        <S.Img src={logo} alt="로고 이미지" />
      </Link>
      <FormProvider initialValues={initialValues} validate={validate}>
        <LoginForm />
      </FormProvider>
      <S.LinkWrapper>
        <Link to={"/signup"}>회원가입</Link>
        <Link to={"/"}>비밀번호 찾기</Link>
      </S.LinkWrapper>
    </S.Wrapper>
  );
}
