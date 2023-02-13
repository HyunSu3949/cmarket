import { useState } from "react";

type ObjectValues = {
  [key: string]: string | number | null;
};

type Props = {
  initialValues: ObjectValues;
  validate: (name: string, value: string | number) => string;
};

export default function useForm({ initialValues, validate }: Props) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    const errorMessage = validate(name, value);
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setTouched({ ...touched, [name]: true });
  };

  const canSubmit = () => {
    const isNotFilled = Object.values(values).some((v) => !v);
    if (isNotFilled) {
      return true;
    } else {
      return false;
    }
  };

  const inputFieldProps = (name: string) => {
    const value = values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return {
      value,
      onBlur,
      onChange,
      canSubmit,
    };
  };

  return {
    values,
    setValues,
    touched,
    errors,
    setErrors,
    canSubmit,
    inputFieldProps,
  };
}
