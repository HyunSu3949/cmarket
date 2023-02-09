import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
export const H2 = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 32px;
`;

export const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 60px;
  background: #f2f2f2;
  border-radius: 10px;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 24px;
  span {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    :first-child {
      margin-left: 260px;
    }
    :nth-child(2) {
      margin-left: 360px;
    }
    :nth-child(3) {
      margin-left: 188px;
    }
    :nth-child(4) {
      margin-left: 170px;
    }
  }
`;

export const TotalTextBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-top: 30px;
  span {
    :first-child {
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      margin-right: 10px;
    }
    :nth-child(2) {
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      color: #eb5757;
    }
  }
`;
