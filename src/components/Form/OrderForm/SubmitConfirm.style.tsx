import styled from "styled-components";

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 18px;
`;

export const Wrapper = styled.div``;

export const InfoContainer = styled.div`
  width: 480px;
  height: 400px;
  border: 2px solid #21bf48;
  border-radius: 10px;
  padding: 30px;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;

export const Divider = styled.div`
  width: 432px;
  height: 1px;

  background: #c4c4c4;
`;
export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;

  color: #eb5757;
`;

export const SubmitContainer = styled.div`
  width: 100%;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
  input {
    margin-right: 4px;
  }
  label {
    font-size: 16px;
    line-height: 20px;
  }
`;

type buttonProp = { disabled: boolean };
export const Button = styled.button`
  width: 220px;
  height: 68px;
  border-radius: 5px;
  background: #c4c4c4;
  color: white;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  display: block;
  text-align: center;
  ${(props: buttonProp) =>
    !props.disabled &&
    `
      background: #21BF48;
  `}
`;
