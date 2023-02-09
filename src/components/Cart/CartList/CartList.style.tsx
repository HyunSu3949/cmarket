import styled from "styled-components";
import { ReactComponent as plusIcon } from "src/assets/images/icon-plus-line.svg";
import { ReactComponent as minusIcon } from "src/assets/images/icon-minus-line.svg";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
export const H2 = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  margin-top: 54px;
  margin-bottom: 52px;
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
  margin-bottom: 35px;
  span {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    :first-child {
      margin-left: 364px;
    }
    :nth-child(2) {
      margin-left: 379px;
    }
    :nth-child(3) {
      margin-left: 238px;
    }
  }
`;

export const TotalInfo = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 150px;
  border-radius: 10px;
  background: #f2f2f2;
  margin-top: 80px;
  > div {
    :first-child {
      margin-left: 90px;
    }
    :nth-child(2) {
      margin-left: 96px;
    }
    :nth-child(3) {
      margin-left: 113px;
    }
    :nth-child(4) {
      margin-left: 110px;
    }
    :nth-child(5) {
      margin-left: 122px;
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    :first-child {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    :nth-child(2) {
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      span {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;

export const TotalTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 230px;
  span {
    :first-child {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
    }
    :nth-child(2) {
      font-weight: bold;
      font-size: 36px;
      line-height: 45px;
      color: #eb5757;
      span {
        font-size: 18px;
        line-height: 23px;
      }
    }
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: white;
`;

export const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  width: 220px;
  height: 68px;
  background: #21bf48;
  margin: 40px auto;
`;

export const PlusIcon = styled(plusIcon)``;
export const MinusIcon = styled(minusIcon)``;
