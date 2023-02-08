import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "src/assets/images/Logo-hodu.png";
import { ReactComponent as cartIcon } from "src/assets/images/icon-shopping-cart.svg";
import { ReactComponent as bagIcon } from "src/assets/images/icon-shopping-bag.svg";
import { ReactComponent as humanIcon } from "src/assets/images/icon-user.svg";

export const Nav = styled.nav`
  width: 100%;
  height: 90px;
  position: fixed;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .wrapper {
    display: flex;
    width: calc(100vw - 720px);
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
    }
  }
`;

export const LogoImg = styled.img.attrs({ src: `${logo}` })`
  width: 124px;
  height: 38px;
  margin-right: 30px;
`;

export const StyledLink = styled(NavLink)<{ id: string }>`
  align-items: center;
  color: #767676;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  font-weight: 400;

  ${(props) =>
    props.id === "cart" &&
    `
    display: flex;
    flex-direction: column;

  `}

  ${(props) =>
    props.id === "seller" &&
    `
    width: 168px;
    height: 54px;
    border-radius:5px;
    background-color:#21BF48;
    color: white;

  `}

${(props) =>
    props.id === "login" &&
    `
    display: flex;
    flex-direction: column;

  `}
`;

export const CartIcon = styled(cartIcon)`
  color: white;
  margin-bottom: 2px;
  &:hover path {
    stroke: ${() => "#21BF48"};
  }
`;
export const BagIcon = styled(bagIcon)`
  color: white;
`;

export const HumanIcon = styled(humanIcon)`
  color: white;
  margin-bottom: 2px;
  &:hover path {
    stroke: ${() => "#21BF48"};
  }
`;

export const MyPageBtn = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56px;
  height: 50px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  margin-right: 16px;
  color: #767676;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;
