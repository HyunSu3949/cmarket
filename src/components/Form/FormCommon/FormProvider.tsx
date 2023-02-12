import { createContext } from "react";
import useForm from "components/Form/hooks/useForm";

export const FormContext = createContext({});

export default function FormProvider({ children, ...props }: any) {
  const formValue = useForm(props);

  return (
    <FormContext.Provider value={formValue}>{children}</FormContext.Provider>
  );
}
