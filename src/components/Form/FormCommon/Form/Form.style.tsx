import styled, { css } from "styled-components";

type Props = {
  className: string;
};

const loginForm = css`
  ${(props: Props) =>
    props.className === "loginForm" &&
    `
      display: flex;
      flex-direction: column;
      width: 550px;
      height: 292px;
      padding: 32px;
      z-index: 5;

  `}
`;
const signupForm = css`
  ${(props: Props) =>
    props.className === "signup_buyer" &&
    `
      display: flex;
      flex-direction: column;
      width: 550px;
      padding: 35px;
      z-index: 5;

      font-size: 16px;
      line-height: 20px;
      color: #767676;
  `}
`;
const signupSellerForm = css`
  ${(props: Props) =>
    props.className === "signup_seller" &&
    `
      display: flex;
      flex-direction: column;
      width: 550px;
      padding: 35px;
      z-index: 5;

      font-size: 16px;
      line-height: 20px;
      color: #767676;
  `}
`;

const orderForm = css`
  ${(props: Props) =>
    props.className === "orderForm" &&
    ` 
      border:none;
      display: flex;
      flex-direction: column;
      width: 100%;

      
  `}
`;
export const Form = styled.form`
  position: relative;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  ${loginForm}
  ${signupForm}
  ${signupSellerForm}
  ${orderForm}
`;
