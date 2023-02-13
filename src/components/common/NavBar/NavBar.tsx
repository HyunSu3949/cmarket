import SearchBar from "components/Search/SearchBar";
import useModals from "components/modal/hooks/useModals";
import { useContext } from "react";
import { AuthContext } from "lib/auth/AuthProvider/AuthProvider";
import { modals } from "components/modal/Modals";
import * as S from "./Navbar.style";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { isLogedIn, loginType, handleLogout } = useContext(AuthContext);

  const { openModal } = useModals();
  const openMyModal = () => {
    openModal(modals.myModal, {
      onLogout: () => {
        handleLogout();
      },
      goToOrderPage: () => {
        navigate("/myorder");
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Nav style={{ display: "flex" }}>
        <div>
          <Link to={"/"}>
            <S.LogoImg src="" alt="메인 로고" />
          </Link>
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
                <S.StyledLink to="/cart" className="cart">
                  <S.CartIcon />
                  장바구니
                </S.StyledLink>
              ) : (
                <S.StyledLink to="/sellerpage" className="sellerPage">
                  <S.BagIcon />
                  판매자 센터
                </S.StyledLink>
              )}
            </>
          ) : (
            <S.StyledLink to="/login" className="login">
              <S.HumanIcon />
              로그인
            </S.StyledLink>
          )}
        </div>
      </S.Nav>
    </S.Wrapper>
  );
}
