import ReactModal from "react-modal";
import "./modal.css";
import styled from "styled-components";

type Props = {
  onClose: () => void;
  onLogout: () => void;
};
export default function MyModal({ onClose, onLogout }: Props) {
  const handleClose = () => {
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    window.location.reload();
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
`;
