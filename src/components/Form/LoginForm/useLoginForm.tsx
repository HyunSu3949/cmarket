import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "src/lib/axiosInstance";

type UserInfo = {
  username: string;
  password: string;
  login_type: "BUYER" | "SELLER";
};

async function login(userInfo: UserInfo): Promise<any> {
  return axiosInstance.post("/accounts/login/", { ...userInfo });
}

export default function useLoginForm() {
  const navigate = useNavigate();
  const [msgFromServer, setMsgFromServer] = useState("");
  const [loginType, setLoginType] = useState<"BUYER" | "SELLER">("BUYER");

  useEffect(() => {
    localStorage.setItem("loginType", loginType);
  }, [loginType]);

  const { mutate: loginMutate } = useMutation(
    (userInfo: UserInfo) => login(userInfo),
    {
      onSuccess: (data) => {
        const token = data.data.token;
        localStorage.setItem("token", token);
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
