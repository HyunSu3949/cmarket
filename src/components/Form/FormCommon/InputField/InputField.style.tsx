import styled, { css } from "styled-components";
type Props = {
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
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
      input::placeholder
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

const InputOrder = css`
  ${(props: Props) =>
    props.className?.includes("orderForm") &&
    `
      width: 334px;
      height: 40px;
      border: 1px solid #C4C4C4;
`}
  ${(props: Props) =>
    props.className?.includes("orderForm username") &&
    `
      width: 346px;
      margin-right:12px;
    `}

${(props: Props) =>
    props.className?.includes("orderForm password") &&
    `
  `}
${(props: Props) =>
    props.className?.includes("orderForm password") &&
    `
  `}
${(props: Props) =>
    props.className?.includes("orderForm password") &&
    `
  `}
`;
const InputUploadProduct = css`
  font-size: 16px;
  line-height: 20px;
  padding-left: 16px;
  ${(props: Props) =>
    props.className?.includes("uploadForm product_name") &&
    `
      width: 534px;
      height: 40px;
      border: 1px solid #C4C4C4;
    
`}
`;

export const Input = styled.input`
  :focus {
    border: 1px solid #21bf48;
  }
  ${InputLogin};

  ${InputSignup};

  ${InputSignupSeller};

  ${InputOrder}

  ${InputUploadProduct}
`;
