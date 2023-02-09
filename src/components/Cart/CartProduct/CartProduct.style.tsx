import styled from "styled-components";
import { ReactComponent as plusIcon } from "src/assets/images/icon-plus-line.svg";
import { ReactComponent as minusIcon } from "src/assets/images/icon-minus-line.svg";
import { ReactComponent as deleteIcon } from "src/assets/images/icon-delete.svg";

export const Wrapper = styled.div`
  display: flex;
  width: 1280px;
  height: 200px;
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  margin-bottom: 6px;
`;

export const Img = styled.img`
  width: 160px;
  height: 160px;
  margin: 20px;
  margin-left: 90px;
  border-radius: 10px;
`;
export const ProductInfoContainer = styled.div`
  margin: auto 0;
  margin-left: 20px;
  width: 418px;
  display: flex;
  flex-direction: column;
`;
export const StoreName = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
  margin-bottom: 10px;
`;

export const ProductName = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 40px;
`;

export const Method_Fee = styled.span`
  color: #767676;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
`;

export const QuantityBtn = styled.div`
  display: flex;
  margin: auto 0;
  margin-left: 48px;
  cursor: pointer;
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

export const TotalWrapper = styled.div`
  text-align: center;
  width: 130px;
  margin: auto;
  margin-left: 148px;
  span {
    display: block;
    color: #eb5757;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
  a {
    display: block;
    text-align: center;
    width: 130px;
    height: 40px;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    padding: 10px;
    color: white;
    background: #21bf48;
    border-radius: 5px;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  height: fit-content;
  margin: 18px;
`;
export const PlusIcon = styled(plusIcon)``;
export const MinusIcon = styled(minusIcon)``;
export const DeleteIcon = styled(deleteIcon)``;
