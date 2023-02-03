import LoginForm from "src/components/Form/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { loginValidate } from "src/components/Form/utils/formValidation";
import FormProvider from "src/components/Form/FormProvider";

export default function LoginPage() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    navigate("/", { replace: true });
  }

  const initialValues = {
    username: "",
    password: "",
  };
  const validate = loginValidate;

  return (
    <div>
      <img src="로고" alt="메인 로고" />
      <FormProvider initialValues={initialValues} validate={validate}>
        <LoginForm />
      </FormProvider>
      <Link to={"/signup"}>회원가입</Link>
      <Link to={"/"}>비밀번호 찾기</Link>
    </div>
  );
}
