import { useContext } from "react";
import { FormContext } from "./FormProvider";
import * as S from "./ValidationMessage.style";
export default function ValidationMessage({ name }: { name: string }) {
  const { touched, errors }: any = useContext(FormContext);
  if (!touched[name] || !errors[name]) {
    return null;
  }
  return <S.Span>{errors[name]}</S.Span>;
}
