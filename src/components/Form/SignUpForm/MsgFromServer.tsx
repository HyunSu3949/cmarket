import { useContext, useState, useEffect } from "react";
import { FormContext } from "../FormCommon/FormProvider";
import * as S from "./MsgFromServer.style";
import Loading from "components/common/Loading/Loading";

type Props = {
  type: string;
  msgFromServer: {
    [key: string]: { status: boolean; message: string };
  };
};

export default function MsgFromServer({ type, msgFromServer }: Props) {
  const { errors, values }: any = useContext(FormContext);
  const validateError = errors[type];
  const [checkMsg, setCheckMsg] = useState("");

  useEffect(() => {
    setCheckMsg(msgFromServer[type].message);
  }, [msgFromServer]);

  useEffect(() => {
    setCheckMsg("");
  }, [values]);
  return (
    <>
      <Loading />
      {validateError === "" && (
        <S.ServerMsg passed={msgFromServer[type].status}>
          {checkMsg}
        </S.ServerMsg>
      )}
    </>
  );
}
