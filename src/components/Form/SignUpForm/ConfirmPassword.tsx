import { useContext, useEffect, useState } from "react";
import { FormContext } from "src/components/Form/FormCommon/FormProvider";
import ValidationMessage from "src/components/Form/FormCommon/ValidationMessage";

export default function ConfirmPassword() {
  const { values, setErrors, touched, errors }: any = useContext(FormContext);
  const password = values["password"];
  const password2 = values["password2"];

  useEffect(() => {
    if (password !== password2) {
      setErrors({ ...errors, password2: "비밀번호가 일치하지 않습니다." });
    }
  }, [touched]);

  return (
    <div>
      <ValidationMessage name={"password2"} />
    </div>
  );
}
