import React, { useState, useContext } from "react";
import { FormContext } from "src/components/Form/FormCommon/FormProvider";

export default function SelectPaymentType() {
  const [selectedOption, setSelectedOption] = useState("CARD");
  const { setValues }: any = useContext(FormContext);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setValues((prev: any) => ({ ...prev, payment_method: e.target.value }));
  };

  return (
    <>
      <div>
        <input
          type="radio"
          id="CARD"
          value="CARD"
          checked={selectedOption === "CARD"}
          onChange={handleOptionChange}
        />
        <label htmlFor="CARD">CARD</label>
      </div>
      <div>
        <input
          type="radio"
          id="DEPOSIT"
          value="DEPOSIT"
          checked={selectedOption === "DEPOSIT"}
          onChange={handleOptionChange}
        />
        <label htmlFor="DEPOSIT">DEPOSIT</label>
      </div>
      <div>
        <input
          type="radio"
          id="PHONE_PAYMENT"
          value="PHONE_PAYMENT"
          checked={selectedOption === "PHONE_PAYMENT"}
          onChange={handleOptionChange}
        />
        <label htmlFor="PHONE_PAYMENT">PHONE_PAYMENT</label>
      </div>
      <div>
        <input
          type="radio"
          id="NAVERPAY"
          value="NAVERPAY"
          checked={selectedOption === "NAVERPAY"}
          onChange={handleOptionChange}
        />
        <label htmlFor="NAVERPAY">NAVERPAY</label>
      </div>
      <div>
        <input
          type="radio"
          id="KAKAOPAY"
          value="KAKAOPAY"
          checked={selectedOption === "KAKAOPAY"}
          onChange={handleOptionChange}
        />
        <label htmlFor="KAKAOPAY">KAKAOPAY</label>
      </div>
    </>
  );
}
