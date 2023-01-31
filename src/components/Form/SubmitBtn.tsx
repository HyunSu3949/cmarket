import { useContext } from "react";
import { FormContext } from "src/components/Form/FormProvider";

type Props = {
  BtnText: string;
};

export default function SubmitBtn({ BtnText }: Props) {
  const { canSubmit }: any = useContext(FormContext);
  const disabled = canSubmit();

  return <button disabled={disabled}>{BtnText}</button>;
}
