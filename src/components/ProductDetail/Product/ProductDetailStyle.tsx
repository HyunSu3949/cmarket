import styled from "styled-components";
import { ReactComponent as plusIcon } from "src/assets/images/icon-plus-line.svg";
import { ReactComponent as minusIcon } from "src/assets/images/icon-minus-line.svg";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 50px;
`;

export const StoreName = styled.span`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  margin-bottom: 16px;
`;

export const ProductName = styled.span`
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;

  span {
    font-size: 18px;
    line-height: 23px;
    font-weight: normal;
    margin-left: 2px;
  }
`;

export const Method_Fee = styled.span`
  color: #767676;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 630px;
  height: 110px;
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
  padding: 30px 0;
  span {
    display: flex;
    width: 50px;
    height: 50px;
    border: 1px solid #c4c4c4;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
  button {
    width: 50px;
    height: 50px;
    border: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  button:first-child {
    border-radius: 5px 0 0 5px;
  }
  button:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const PlusIcon = styled(plusIcon)``;
export const MinusIcon = styled(minusIcon)``;
