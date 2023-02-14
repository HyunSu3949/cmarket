import ReactModal from "react-modal";
import styled from "styled-components";
import "./modal.css";

export default function ConfirmModal({ onClose, text }: any) {
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen
      onRequestClose={handleClose}
      ariaHideApp={false}
      className="ModalSmall"
    >
      <p>{text}</p>
      <Button onClick={handleClose}>확인</Button>
    </ReactModal>
  );
}

const Button = styled.button`
  text-align: center;
  margin-top: 20px;
  width: 60px;
  height: 35px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
