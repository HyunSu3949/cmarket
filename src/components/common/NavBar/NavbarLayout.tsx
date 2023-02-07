import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
export default function NavbarLayout() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  height: 90px;
  width: 100%;
`;
const Wrapper = styled.div``;
