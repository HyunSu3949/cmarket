import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <img src="" alt="메인 로고" />
      <form>
        <input type="text" placeholder="상품을 검색해보세요!" />
        <button>
          <img src="돋보기" alt="검색 버튼" />
        </button>
      </form>
      <Link to="/cart">
        <img src="" alt="장바구니 아이콘" />
        장바구니
      </Link>
      <Link to="/login">
        <img src="" alt="로그인 아이콘" />
        로그인
      </Link>
    </nav>
  );
}
