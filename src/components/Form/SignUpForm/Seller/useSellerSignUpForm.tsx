import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axiosInstance from "src/lib/axiosInstance";
import { toast } from "react-toastify";

type signUpInfo = {
  username: string;
  password: string;
  password2: string;
  name: string;
  phone_number: string;
};
type check = {
  [key: string]: string;
};
async function validateUsername(username: string) {
  const result = await axiosInstance.post("/accounts/signup/valid/username/", {
    username: username,
  });
  return result;
}
async function validateRegistNumber(registNumber: string) {
  const result = await axiosInstance.post(
    "/accounts/signup/valid/company_registration_number/",
    {
      company_registration_number: registNumber,
    }
  );
  return result;
}
async function signUp(values: signUpInfo) {
  return axiosInstance.post("/accounts/signup_seller/", {
    ...values,
  });
}

export default function useSignUpForm() {
  const navigate = useNavigate();
  const [msgFromServer, setMsgFromServer] = useState<check>({
    username: "",
    password: "",
    phone__number: "",
    company_registration_number: "",
  });

  const { mutate: validateUsernameMutate } = useMutation(
    (username: string) => validateUsername(username),
    {
      onSuccess: (data) => {
        const message = data.data.Success;

        setMsgFromServer((prev) => ({
          ...prev,
          username: message,
        }));
      },
      onError: (error: any) => {
        const errors = error.response.data;

        if (errors.FAIL_Message) {
          setMsgFromServer((prev) => ({
            ...prev,
            username: errors.FAIL_Message,
          }));
        }
      },
    }
  );
  const { mutate: validateRegistNumberMutate } = useMutation(
    (registNumber: string) => validateRegistNumber(registNumber),
    {
      onSuccess: (data) => {
        const message = data.data.Success;

        setMsgFromServer((prev) => ({
          ...prev,
          company_registration_number: message,
        }));
      },
      onError: (error: any) => {
        const errors = error.response.data;

        if (errors.FAIL_Message) {
          setMsgFromServer((prev) => ({
            ...prev,
            company_registration_number: errors.FAIL_Message,
          }));
        }
      },
    }
  );

  const { mutate: signUpMutate } = useMutation(
    (signUpInfo: signUpInfo) => signUp(signUpInfo),
    {
      onSuccess: (data) => {
        toast("회원가입 완료! 로그인해서 시작해보세요!");
        navigate("/login", { replace: true });
      },
      onError: (error: any) => {
        const errors = { ...error.response.data };
        if (errors.phone_number) {
          setMsgFromServer((prev) => ({
            ...prev,
            phone_number: errors.phone_number[0],
          }));
        }
        if (errors.password) {
          setMsgFromServer((prev) => ({
            ...prev,
            password: errors.password[0],
          }));
        }
        if (errors.store_name) {
          setMsgFromServer((prev) => ({
            ...prev,
            store_name: errors.store_name[0],
          }));
        }
        toast.error("잘못된 접근");
      },
    }
  );

  const onSubmit = async (values: signUpInfo) => {
    if (msgFromServer.username !== "멋진 아이디네요 :)") {
      toast("아이디 중복검사를 해주세요");
      return;
    }
    if (
      msgFromServer.company_registration_number !==
      "사용 가능한 사업자등록번호입니다."
    ) {
      toast("사업자등록번호 중복검사를 해주세요");
      return;
    }

    signUpMutate(values);
  };

  return {
    onSubmit,
    validateUsernameMutate,
    validateRegistNumberMutate,
    signUpMutate,
    msgFromServer,
  };
}
