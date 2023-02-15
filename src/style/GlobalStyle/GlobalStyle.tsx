import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import font_L from "../fonts/SpoqaHanSansNeo-Light.woff2";
import font_R from "../fonts/SpoqaHanSansNeo-Regular.woff2";
import font_M from "../fonts/SpoqaHanSansNeo-Medium.woff2";
import font_B from "../fonts/SpoqaHanSansNeo-Bold.woff2";
import font_T from "../fonts/SpoqaHanSansNeo-Thin.woff2";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: thin;
  src: url(${font_T}) format("woff2"),
}
  @font-face {
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 100;
  src: url(${font_L}) format("woff2"),
}

@font-face {
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  src: url(${font_R}) format("woff2"),
}

@font-face {
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  src: url(${font_M}) format("woff2"),
}

@font-face {
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: bold;
  src: url(${font_B}) format("woff2"),
}

  *, *::before, *::after {
    box-sizing: border-box;
  }

.ir {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

body {
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal; /* 100 = 얇게, normal = 보통, 500 = 두껍게 */
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  all: unset;
  cursor: pointer;
}

input {
  outline: none;
  
}
input::placeholder {
  font-size: 14px;
}
`;
export default GlobalStyles;
