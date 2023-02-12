import React, { useState, useContext } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";
import * as S from "./SelectPaymentType.style";
export default function SelectPaymentType() {
  const [selectedOption, setSelectedOption] = useState("CARD");
  const { setValues }: any = useContext(FormContext);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setValues((prev: any) => ({ ...prev, payment_method: e.target.value }));
  };

  return (
    <S.Wrapper>
      <S.H3>결제수단</S.H3>
      <S.MethodContainer>
        <div>
          <input
            type="radio"
            id="CARD"
            value="CARD"
            checked={selectedOption === "CARD"}
            onChange={handleOptionChange}
          />
          <label htmlFor="CARD">카드</label>
        </div>
        <div>
          <input
            type="radio"
            id="DEPOSIT"
            value="DEPOSIT"
            checked={selectedOption === "DEPOSIT"}
            onChange={handleOptionChange}
          />
          <label htmlFor="DEPOSIT">계좌이체</label>
        </div>
        <div>
          <input
            type="radio"
            id="PHONE_PAYMENT"
            value="PHONE_PAYMENT"
            checked={selectedOption === "PHONE_PAYMENT"}
            onChange={handleOptionChange}
          />
          <label htmlFor="PHONE_PAYMENT">휴대폰</label>
        </div>
        <div>
          <input
            type="radio"
            id="NAVERPAY"
            value="NAVERPAY"
            checked={selectedOption === "NAVERPAY"}
            onChange={handleOptionChange}
          />
          <label htmlFor="NAVERPAY">네이버페이</label>
        </div>
        <div>
          <input
            type="radio"
            id="KAKAOPAY"
            value="KAKAOPAY"
            checked={selectedOption === "KAKAOPAY"}
            onChange={handleOptionChange}
          />
          <label htmlFor="KAKAOPAY">카카오페이</label>
        </div>
      </S.MethodContainer>
    </S.Wrapper>
  );
}
