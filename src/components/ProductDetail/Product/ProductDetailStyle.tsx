import styled from "styled-components";
import { ReactComponent as plusIcon } from "src/assets/images/icon-plus-line.svg";
import { ReactComponent as minusIcon } from "src/assets/images/icon-minus-line.svg";

export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  margin: 80px auto;
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
export const ProductInfoContainer = styled.div`
  margin-bottom: 138px;
  display: flex;
  flex-direction: column;
`;
export const StoreName = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  margin-bottom: 16px;
`;

export const ProductName = styled.span`
  font-weight: bold;
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

export const QuantityBtn = styled.div`
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

export const PriceContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  width: 630px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .totalword {
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #000000;
  }
  div {
    display: flex;
    align-items: center;

    .totalprice {
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;
      color: #767676;

      ::after {
        content: "|";
        height: 18px;
        font-size: 18px;
        line-height: 18px;
        vertical-align: text-top;
        color: #767676;
        margin: 0 12px;
      }

      span {
        font-weight: bold;
        color: #21bf48;
      }
    }
  }
`;

export const BtnContainer = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 416px;
    height: 60px;
    background: #21bf48;
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    color: white;
  }

  button {
    width: 200px;
    height: 60px;
    background: #767676;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    line-height: 22px;
    color: white;
  }
`;
