import styled from "styled-components";
import search from "assets/images/search.png";

export const Input = styled.input.attrs({
  placeholder: "상품을 검색해보세요!",
})`
  width: 400px;
  height: 46px;
  background: #ffffff;
  border: 2px solid #21bf48;
  border-radius: 50px;
  outline: none;
  box-sizing: border-box;
  padding-left: 22px;
  padding-right: 52px;
  margin-right: 30px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
`;

export const Button = styled.button`
  all: unset;
  width: 28px;
  height: 28px;
  background-image: url(${search});
  background-size: contain;
  position: absolute;
  right: 52px;
  top: 10px;

  .ir {
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
  }
`;
