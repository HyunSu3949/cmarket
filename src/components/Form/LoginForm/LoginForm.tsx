import InputField from "src/components/Form/InputField";
import ValidationMessage from "src/components/Form/ValidationMessage";
import Form from "src/components/Form/Form";
import useLoginForm from "./useLoginForm";
import SubmitBtn from "src/components/Form/SubmitBtn";
import MsgFromServer from "./../SignUpForm/MsgFromServer";

export default function LoginForm() {
  const { msgFromServer, onSubmit, setLoginType } = useLoginForm();
  return (
    <>
      <div>
        <button type="button" onClick={() => setLoginType("BUYER")}>
          구매회원 로그인
        </button>
        <button type="button" onClick={() => setLoginType("SELLER")}>
          판매회원 로그인
        </button>
      </div>
      <Form onSubmit={onSubmit}>
        <InputField type="username" name="username" />
        <ValidationMessage name="username" />
        <InputField type="password" name="password" />
        <ValidationMessage name="password" />
        <MsgFromServer type="login" message={msgFromServer["login"]} />
        <SubmitBtn BtnText={"로그인"} />
      </Form>
    </>
  );
}
