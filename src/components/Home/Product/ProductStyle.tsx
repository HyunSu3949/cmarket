import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 380px;
  height: 490px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 16px;
`;
export const StoreName = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  margin-bottom: 8px;
`;

export const ProductName = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;

  span {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    margin-left: 2px;
  }
`;
