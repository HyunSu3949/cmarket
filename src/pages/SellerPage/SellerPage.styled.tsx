import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  width: fit-content;
  margin: 20px auto;
  > div {
    display: flex;
  }
`;
export const BtnNav = styled.nav`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const Button = styled.button`
  margin-bottom: 10px;
  background-color: white;
  padding: 10px 20px;
  font-weight: 500;
  border-radius: 5px;
  font-size: 16px;
  ${(props) =>
    props.className === "clicked" &&
    ` 
      background-color:#21bf48; 
      color:white;
      `}
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 130px;
  margin-left: auto;
  background: #21bf48;
  border-radius: 5px;
  padding: 16px 20px;
  color: white;
  margin-bottom: 38px;
`;
