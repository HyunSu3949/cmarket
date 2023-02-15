import React, { useContext, useState } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";
import styled from "styled-components";

export default function SelectShippingMethod() {
  const { values, setValues } = useContext(FormContext);
  const [clicked, setClicked] = useState("PAECEL");

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValues({
      ...values,
      shipping_method: (e.target as HTMLButtonElement).id,
    });

    setClicked((e.target as HTMLButtonElement).id);
  };
  return (
    <>
      <button></button>
      <div>
        <Button
          className={clicked === "PARCEL" ? "clicked" : ""}
          id="PARCEL"
          onClick={handleChange}
          type="button"
        >
          택배,소포
        </Button>
        <Button
          className={clicked === "DELIVERY" ? "clicked" : ""}
          id="DELIVERY"
          onClick={handleChange}
          type="button"
        >
          직접배송
        </Button>
      </div>
    </>
  );
}

const Button = styled.button`
  height: 54px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  color: #767676;
  width: 220px;
  text-align: center;
  font-weight: bold;
  margin-right: 10px;
  ${(props) =>
    props.className === "clicked" &&
    `
    background: #21BF48;
    color: #FFFFFF;
  `}
`;
