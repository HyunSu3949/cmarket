import { useContext, ReactNode } from "react";
import { FormContext } from "./FormProvider";

type FormProps = {
  onSubmit: (values: any) => Promise<void>;
  children: ReactNode;
};

export default function Form({ onSubmit, children }: FormProps) {
  const { canSubmit, values }: any = useContext(FormContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (canSubmit()) {
      return;
    } else {
      onSubmit(values);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
