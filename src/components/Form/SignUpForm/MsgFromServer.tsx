import { useContext, useState, useEffect } from "react";
import { FormContext } from "../FormProvider";

type Props = {
  type: string;
  message: string;
};

export default function MsgFromServer({ type, message }: Props) {
  const { errors, values }: any = useContext(FormContext);
  const validateError = errors[type];
  const [checkMsg, setCheckMsg] = useState("");

  useEffect(() => {
    setCheckMsg("");
  }, [values]);

  useEffect(() => {
    setCheckMsg(message);
  }, [message]);

  return <>{validateError === "" && <span>{checkMsg}</span>}</>;
}
