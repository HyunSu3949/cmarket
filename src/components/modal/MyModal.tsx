import ReactModal from "react-modal";
import "./modal.css";
import styled from "styled-components";

type Props = {
  onClose: () => void;
  onLogout: () => void;
  goToOrderPage: () => void;
};
export default function MyModal({ onClose, onLogout, goToOrderPage }: Props) {
  const handleClose = () => {
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    window.location.reload();
    onClose();
  };

  const handleMove = () => {
    goToOrderPage();
    onClose();
  };

  return (
    <ReactModal
      isOpen
      onRequestClose={handleClose}
      ariaHideApp={false}
      className="MyModal"
      overlayClassName="Overlay"
    >
      <Button onClick={handleMove}>주문목록</Button>
      <Button onClick={handleLogout}>로그아웃</Button>
    </ReactModal>
  );
}
const Button = styled.button`
  text-align: center;
  width: 60px;
  height: 35px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 0 10px;
  :first-child {
    margin-bottom: 10px;
  }
  :hover {
    cursor: pointer;
    border: 1px solid black;
  }
`;
