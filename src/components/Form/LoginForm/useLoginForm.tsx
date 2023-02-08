import { useState, useEffect, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "src/lib/axiosInstance";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";
import { FormContext } from "src/components/Form/FormCommon/FormProvider";

type UserInfo = {
  username: string;
  password: string;
  login_type: string;
};

async function login(userInfo: UserInfo): Promise<any> {
  return axiosInstance.post("/accounts/login/", { ...userInfo });
}

export default function useLoginForm() {
  const navigate = useNavigate();
  const { setLoginType, loginType, setIsLogedIn } = useContext(AuthContext);
  const [msgFromServer, setMsgFromServer] = useState("");

  const { mutate: loginMutate } = useMutation(
    (userInfo: UserInfo) => login(userInfo),
    {
      onSuccess: (data) => {
        const token = data.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("login_type", loginType);
        setIsLogedIn(true);
        navigate("/", { replace: true });
      },
      onError: (error: any) => {
        if (error.response.data.FAIL_Message === "로그인 정보가 없습니다.") {
          setMsgFromServer("아이디 또는 비밀번호를 확인하세요");

          return;
        }
        if (
          error.response.data.FAIL_Message ===
          "로그인 정보가 없습니다. 로그인 유형을 학인해주세요."
        ) {
          setMsgFromServer("로그인 유형을 확인하세요");

          return;
        }
      },
    }
  );

  const onSubmit = async (values: UserInfo) => {
    loginMutate({ ...values, login_type: loginType });
  };

  return { msgFromServer, onSubmit, loginType, setLoginType };
}
