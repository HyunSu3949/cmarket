import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 130px;
  border-bottom: 1px solid #c4c4c4; ;
`;

export const Img = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 10px;
  margin: 8px;
`;
export const ProductInfoContainer = styled.div`
  margin: auto 0;
  margin-left: 36px;
  width: 442px;
  display: flex;
  flex-direction: column;
  span {
    :first-child {
      color: #767676;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 6px;
    }
    :nth-child(2) {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    :nth-child(3) {
      color: #767676;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const DiscountContainer = styled.div`
  width: fit-content;
  margin-left: 110px;
`;
export const ShippingFeeContainer = styled.div`
  width: fit-content;
  margin-left: 190px;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
`;

export const TotalPriceContainer = styled.div`
  width: fit-content;
  margin-left: 160px;
  font-size: 18px;
  line-height: 23px;
  font-weight: bold;
`;
