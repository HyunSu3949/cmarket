import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "src/components/Search/SearchBar";
import useModals from "src/components/modal/hooks/useModals";

export default function NavBar() {
  const login_type = localStorage.getItem("login_type");
  const { openModal } = useModals();
  const openMyModal = () => {};
  return (
    <nav>
      <img src="" alt="메인 로고" />
      <SearchBar />
      <button onClick={openMyModal}></button>
      {login_type === "BUYER" ? (
        <Link to="/cart">
          <img src="" alt="장바구니 아이콘" />
          장바구니
        </Link>
      ) : (
        <Link to={"/sellerpage"}>판매자 센터 </Link>
      )}
      <Link to="/login">
        <img src="" alt="로그인 아이콘" />
        로그인
      </Link>
    </nav>
  );
}
