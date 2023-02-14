import { useContext, ReactNode } from "react";
import { FormContext } from "./FormProvider";
import * as S from "./Form.style";

type FormProps = {
  onSubmit: (values: any) => Promise<void>;
  children: ReactNode;
  className: string;
};

export default function Form({ onSubmit, children, className }: FormProps) {
  const { canSubmit, values } = useContext(FormContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (canSubmit()) {
      return;
    } else {
      onSubmit(values);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit} className={className}>
      {children}
    </S.Form>
  );
}
