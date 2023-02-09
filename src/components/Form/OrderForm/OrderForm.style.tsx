import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  padding-bottom: 18px;
  border-bottom: 2px solid #c4c4c4;
`;
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c4c4c4;
  span {
    position: absolute;
    top: 18px;
    font-size: 16px;
    line-height: 20px;
  }
  input {
    margin-left: 170px;
  }
`;

export const Span = styled.span`
  position: relative;
  font-size: 16px;
  line-height: 20px;
`;
