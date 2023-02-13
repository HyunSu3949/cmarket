import { createContext } from "react";
import useForm from "components/Form/hooks/useForm";

export const FormContext = createContext({});

type Props = {
  children: React.ReactElement;
  validate: (name: string, value: string | number) => string;
  initialValues: { [key: string]: string | number | null };
};

export default function FormProvider(props: Props) {
  const formValue = useForm(props);

  return (
    <FormContext.Provider value={formValue}>
      {props.children}
    </FormContext.Provider>
  );
}
