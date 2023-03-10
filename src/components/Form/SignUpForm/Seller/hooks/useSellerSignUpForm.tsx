import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axiosInstance from "lib/axiosInstance";
import { toast } from "react-toastify";

type signUpInfo = {
  username: string;
  password: string;
  password2: string;
  name: string;
  phone_number: string;
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
  const [msgFromServer, setMsgFromServer] = useState({
    username: { status: false, message: "" },
    password: { status: false, message: "" },
    phone_number: { status: false, message: "" },
    company_registration_number: { status: false, message: "" },
    store_name: { status: false, message: "" },
  });

  const { mutate: validateUsernameMutate } = useMutation(
    (username: string) => validateUsername(username),
    {
      onSuccess: (data) => {
        const message = data.data.Success;

        setMsgFromServer((prev) => ({
          ...prev,
          username: { status: true, message: message },
        }));
      },
      onError: (error: any) => {
        const errors = error.response.data;

        if (errors.FAIL_Message) {
          setMsgFromServer((prev) => ({
            ...prev,
            username: { status: false, message: errors.FAIL_Message },
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
          company_registration_number: { status: true, message: message },
        }));
      },
      onError: (error: any) => {
        const errors = error.response.data;

        if (errors.FAIL_Message) {
          setMsgFromServer((prev) => ({
            ...prev,
            company_registration_number: {
              status: false,
              message: errors.FAIL_Message,
            },
          }));
        }
      },
    }
  );

  const { mutate: signUpMutate } = useMutation(
    (signUpInfo: signUpInfo) => signUp(signUpInfo),
    {
      onSuccess: (data) => {
        toast("???????????? ??????! ??????????????? ??????????????????!");
        navigate("/login", { replace: true });
      },
      onError: (error: any) => {
        const errors = { ...error.response.data };
        if (errors.phone_number) {
          setMsgFromServer((prev) => ({
            ...prev,
            phone_number: { status: false, message: errors.phone_number[0] },
          }));
        }
        if (errors.password) {
          setMsgFromServer((prev) => ({
            ...prev,
            password: { status: false, message: errors.password[0] },
          }));
        }
        if (errors.store_name) {
          setMsgFromServer((prev) => ({
            ...prev,
            store_name: { status: false, message: errors.store_name[0] },
          }));
        }
        toast.error("????????? ??????");
      },
    }
  );

  const onSubmit = async (values: signUpInfo) => {
    if (msgFromServer.username.message !== "?????? ??????????????? :)") {
      toast("????????? ??????????????? ????????????");
      return;
    }
    if (
      msgFromServer.company_registration_number.message !==
      "?????? ????????? ??????????????????????????????."
    ) {
      toast("????????????????????? ??????????????? ????????????");
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
