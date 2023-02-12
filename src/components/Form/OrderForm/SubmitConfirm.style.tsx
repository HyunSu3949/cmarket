import styled from "styled-components";

export const Wrapper = styled.div``;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 18px;
`;

export const SubmitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  height: 400px;
  border: 2px solid #21bf48;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
`;
export const TextContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  padding: 30px;
  div {
    display: flex;
    margin-bottom: 30px;
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
  margin: 0 auto;
  ${(props: buttonProp) =>
    !props.disabled &&
    `
      background: #21BF48;
  `}
`;
