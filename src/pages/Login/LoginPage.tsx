import LoginForm from "src/components/Form/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { loginValidate } from "src/components/Form/utils/formValidation";
import FormProvider from "src/components/Form/FormCommon/FormProvider";
import { useContext } from "react";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";
import logo from "src/assets/images/Logo-hodu.png";
import * as S from "./LoginPage.style";

export default function LoginPage() {
  const navigate = useNavigate();
  const { isLogedIn } = useContext(AuthContext);
  if (isLogedIn) {
    navigate("/");
  }
  const initialValues = {
    username: "",
    password: "",
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
