import { useState, useEffect, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "src/lib/axiosInstance";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";

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
        if (error.response.data.FAIL_Message) {
          setMsgFromServer(error.response.data.FAIL_Message);
          return;
        }
      },
    }
  );

  const onSubmit = async (values: UserInfo) => {
    loginMutate({ ...values, login_type: loginType });
  };

  return { msgFromServer, onSubmit, setLoginType };
}
