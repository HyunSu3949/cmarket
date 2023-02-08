import styled, { css } from "styled-components";
type Props = {
  className?: string;
};

const InputLogin = css`
  ${(props: Props) =>
    props.className?.includes("loginForm") &&
    `
      width: 480px;
      height: 60px;
      border: none;
      border-bottom: 1px solid #C4C4C4;
      margin: 0 auto;
`}
  ${(props: Props) =>
    props.className?.includes("loginForm username") &&
    `
    margin-bottom: 6px
    `}

${(props: Props) =>
    props.className?.includes("loginForm password") &&
    `
    margin-bottom: 6px
  `}
`;

const InputSignup = css`
  ${(props: Props) =>
    props.className?.includes("signup_buyer") &&
    `
      height: 54px;
      width: 100%;
      border: 1px solid #C4C4C4;
      border-radius: 5px;
      margin: 0 auto;
`}
  ${(props: Props) =>
    props.className?.includes("signup_buyer username") &&
    `
    width: 346px;
    margin-right:12px;
    margin-bottom: 6px
    `}

${(props: Props) =>
    props.className?.includes("signup_buyer password") &&
    `
    margin-bottom: 6px
  `}
`;

const InputSignupSeller = css`
  ${(props: Props) =>
    props.className?.includes("signup_seller") &&
    `
      height: 54px;
      width: 100%;
      border: 1px solid #C4C4C4;
      border-radius: 5px;
      margin: 0 auto;
`}
  ${(props: Props) =>
    props.className?.includes("signup_seller username") &&
    `
    width: 346px;
    margin-right:12px;
    margin-bottom: 6px
    `}

${(props: Props) =>
    props.className?.includes("signup_seller password") &&
    `
    margin-bottom: 6px
  `}
   ${(props: Props) =>
    props.className?.includes("signup_seller company_registration_number") &&
    `
    width: 346px;
    margin-right:12px;
    margin-bottom: 6px
    `}
`;

export const Input = styled.input`
  ${InputLogin};

  ${InputSignup};

  ${InputSignupSeller};
`;
