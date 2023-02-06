import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "src/assets/images/Logo-hodu.png";
import { ReactComponent as cartIcon } from "src/assets/images/icon-shopping-cart.svg";
import { ReactComponent as bagIcon } from "src/assets/images/icon-shopping-bag.svg";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 320px;
  max-width: 100%;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const LogoImg = styled.img.attrs({ src: `${logo}` })`
  width: 124px;
  height: 38px;
`;

export const StyledLink = styled(NavLink)<{ id: string }>`
  align-items: center;
  ${(props) =>
    props.id === "cart" &&
    `
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    
  `}

  ${(props) =>
    props.id === "seller" &&
    `
    color: inherit;
  text-decoration: none;

    width: 168px;
    height: 54px;
    border-radius:5px;
    background-color:#21BF48;
    color: white;

  `}
`;

export const CartIcon = styled(cartIcon)`
  width: 32px;
  height: 32px;
  color: white;
  margin-bottom: 4px;
  &:hover path {
    stroke: ${({ color }) => "#21BF48"};
  }
`;
export const BagIcon = styled(bagIcon)`
  color: white;
`;
