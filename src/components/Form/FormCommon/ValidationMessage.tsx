import { useContext } from "react";
import { FormContext } from "./FormProvider";
import styled from "styled-components";

export default function ValidationMessage({ name }: { name: string }) {
  const { touched, errors }: any = useContext(FormContext);
  if (!touched[name] || !errors[name]) {
    return null;
  }
  return <Span>{errors[name]}</Span>;
}

export const Span = styled.span`
  color: red;
`;
