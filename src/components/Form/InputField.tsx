import { useContext } from "react";
import { FormContext } from "src/components/Form/FormProvider";

export default function InputField(props: any) {
  const { inputFieldProps }: any = useContext(FormContext);
  const { value, onBlur, onChange } = inputFieldProps(props.name);
  return (
    <input
      type={props.type}
      name={props.name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
}
