import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  span {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }
  input {
    height: 54px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  > span {
    margin-bottom: 10px;
    color: #767676;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
`;
export const DefWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }
  input {
    width: 100%;
    height: 300px;
    background: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }
`;
