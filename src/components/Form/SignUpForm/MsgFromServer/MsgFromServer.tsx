import { useContext, useState, useEffect } from "react";
import { FormContext } from "../../FormCommon/FormProvider";
import Loading from "components/common/Loading/Loading";
import styled from "styled-components";

type Props = {
  type: string;
  msgFromServer: {
    [key: string]: { status: boolean; message: string };
  };
};

export default function MsgFromServer({ type, msgFromServer }: Props) {
  const { errors, values } = useContext(FormContext);
  const validateError = errors[type];
  const [checkMsg, setCheckMsg] = useState("");

  useEffect(() => {
    setCheckMsg(msgFromServer[type].message);
  }, [msgFromServer]);

  useEffect(() => {
    setCheckMsg("");
  }, [values[type]]);

  return (
    <>
      <Loading className="form" />
      {validateError === "" && (
        <ServerMsg passed={msgFromServer[type].status}>{checkMsg}</ServerMsg>
      )}
    </>
  );
}

type MsgProps = {
  passed?: boolean;
};
export const ServerMsg = styled.span`
  color: red;
  ${(props: MsgProps) =>
    props.passed &&
    `
      color: #21BF48;
  `}
`;
