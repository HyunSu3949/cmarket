import React, { useContext } from "react";
import { FormContext } from "src/components/Form/FormCommon/FormProvider";

export default function SelectShippingMethod() {
  const { values, setValues }: any = useContext(FormContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      shipping_method: e.target.value,
    });
  };
  return (
    <>
      <div>
        <button value="PARCEL" onClick={() => handleChange}>
          Parcel
        </button>
        <button value="DELIVERY" onClick={() => handleChange}>
          Delivery
        </button>
      </div>
    </>
  );
}
