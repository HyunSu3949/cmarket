import { useContext } from "react";
import { FormContext } from "src/components/Form/FormProvider";

export default function ValidationMessage({ name }: { name: string }) {
  const { touched, errors }: any = useContext(FormContext);
  if (!touched[name] || !errors[name]) {
    return null;
  }
  return <span>{errors[name]}</span>;
}
