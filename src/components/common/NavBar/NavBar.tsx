import React from "react";
import SearchBar from "src/components/Search/SearchBar";
import useModals from "src/components/modal/hooks/useModals";
import { useContext } from "react";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";
import { modals } from "src/components/modal/Modals";
import * as S from "./NavbarStyle";

export default function NavBar() {
  const { isLogedIn, loginType, handleLogout } = useContext(AuthContext);

  const { openModal } = useModals();
  const openMyModal = () => {
    openModal(modals.myModal, {
      onLogout: () => {
        handleLogout();
      },
    });
  };

  return (
    <S.Nav style={{ display: "flex" }}>
      <div className="wrapper">
        <div>
          <S.LogoImg src="" alt="메인 로고" />
          <SearchBar />
        </div>
        <div>
          {isLogedIn ? (
            <>
              <S.MyPageBtn onClick={openMyModal}>
                <S.HumanIcon />
                마이페이지
              </S.MyPageBtn>
              {loginType === "BUYER" ? (
                <S.StyledLink to="/cart" id="cart">
                  <S.CartIcon />
                  장바구니
                </S.StyledLink>
              ) : (
                <S.StyledLink to="/sellerpage" id="seller">
                  <S.BagIcon />
                  판매자 센터
                </S.StyledLink>
              )}
            </>
          ) : (
            <S.StyledLink to="/login" id="login">
              <S.HumanIcon />
              로그인
            </S.StyledLink>
          )}
        </div>
      </div>
    </S.Nav>
  );
}
