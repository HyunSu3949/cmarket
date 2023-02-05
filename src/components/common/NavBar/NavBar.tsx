import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "src/components/Search/SearchBar";
import useModals from "src/components/modal/hooks/useModals";
import { useContext } from "react";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";
import { modals } from "src/components/modal/Modals";

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
    <nav style={{ display: "flex" }}>
      <img src="" alt="메인 로고" />
      <SearchBar />
      {isLogedIn ? (
        <>
          <button onClick={openMyModal}>마이페이지</button>
          {loginType === "BUYER" ? (
            <Link to="/cart">
              <img src="" alt="장바구니 아이콘" />
              장바구니
            </Link>
          ) : (
            <Link to={"/sellerpage"}>판매자 센터</Link>
          )}
        </>
      ) : (
        <Link to="/login">
          <img src="" alt="로그인 아이콘" />
          로그인
        </Link>
      )}
    </nav>
  );
}
