import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "assets/images/Logo-hodu.png";
import { ReactComponent as cartIcon } from "assets/images/icon-shopping-cart.svg";
import { ReactComponent as bagIcon } from "assets/images/icon-shopping-bag.svg";
import { ReactComponent as humanIcon } from "assets/images/icon-user.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: fixed;
  background: #ffffff;
  z-index: 20;
`;

export const Nav = styled.nav`
  display: block;
  margin: 0 auto;
  width: fit-content;
  box-sizing: border-box;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    :first-child {
      margin-right: 200px;
    }
  }
`;

export const LogoImg = styled.img.attrs({ src: `${logo}` })`
  width: 124px;
  height: 38px;
  margin-right: 30px;
`;

export const StyledLink = styled(NavLink)`
  align-items: center;
  color: #767676;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  font-weight: 400;
  ${(props) =>
    props.className === "cart" &&
    `
    display: flex;
    flex-direction: column;
    
    `}

  ${(props) =>
    props.className === "sellerPage" &&
    `
    display: flex;
    justify-content: center;
    width: 168px;
    height: 54px;
    border-radius:5px;
    background-color:#21BF48;
    color: white;
    font-size: 18px;
    font-weight: bold;
  `}

${(props) =>
    props.className === "login" &&
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

export const SearchWrapper = styled.div`
  position: relative;
`;
