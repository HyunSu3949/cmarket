import { useContext } from "react";
import { FormContext } from "../FormProvider";
import * as S from "./InputField.style";

type Props = {
  type: string;
  name: string;
  className?: string;
  placeholder?: string;
};

export default function InputField(props: Props) {
  const { inputFieldProps } = useContext(FormContext);
  const { value, onBlur, onChange } = inputFieldProps(props.name);

  return (
    <S.Input
      type={props.type}
      name={props.name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}
