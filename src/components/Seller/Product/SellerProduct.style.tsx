import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 133px;
    border-bottom: 1px solid #c4c4c4;
    background-color: white;
    padding: 30px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 30px;
    }

    > div {
      display: flex;
      flex-direction: column;
      width: 100px;
      span:first-child {
        font-size: 18px;
        line-height: 22px;
      }
      span:nth-child(2) {
        font-size: 16px;
        line-height: 20px;
        color: #767676;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  line-height: 20px;
  background: #21bf48;
  border-radius: 5px;
  padding: 10px 25px;
  margin-right: 60px;
`;

export const Price = styled.span`
  font-size: 18px;
  line-height: 22px;
  margin: 0 auto;
`;
