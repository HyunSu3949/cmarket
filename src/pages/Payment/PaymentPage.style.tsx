import styled from "styled-components";

export const Wrapper = styled.main`
  width: fit-content;
  margin: 0 auto;
`;

export const OrderListWrapper = styled.div`
  width: fit-content;
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
