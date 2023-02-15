import styled, { css } from "styled-components";
type Props = {
  className?: string;
};

const LoginBtn = css`
  ${(props: Props) =>
    props.className?.includes("loginForm") &&
    `
      width: 480px;
      height: 60px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background: #21bf48;
      border-radius: 5px;
      margin: auto 0;
      cursor:pointer;
`}
`;

const SignupBtn = css`
  ${(props: Props) =>
    props.className?.includes("signup_buyer") &&
    `
      width: 480px;
      height: 60px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background: #21bf48;
      border-radius: 5px;
      margin: 30px 0;
      cursor:pointer;
`}
`;
const UploadBtn = css`
  ${(props: Props) =>
    props.className?.includes("uploadForm") &&
    `
      width: 200px;
      height: 60px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background: #21bf48;
      border-radius: 5px;
      margin: 30px 0;
      cursor:pointer;
`}
`;

export const Button = styled.button`
  ${LoginBtn}
  ${SignupBtn}
  ${UploadBtn}
`;
