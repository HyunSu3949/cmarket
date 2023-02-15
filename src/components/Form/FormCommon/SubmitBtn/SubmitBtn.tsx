import { useContext } from "react";
import { FormContext } from "../FormProvider";
import * as S from "./SubmitBtn.style";

type Props = {
  BtnText: string;
  className?: string;
};

export default function SubmitBtn({ BtnText, className }: Props) {
  const { canSubmit } = useContext(FormContext);
  const disabled = canSubmit();

  return (
    <S.Button disabled={disabled} className={className}>
      {BtnText}
    </S.Button>
  );
}
