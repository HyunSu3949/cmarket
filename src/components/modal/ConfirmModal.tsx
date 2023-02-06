import ReactModal from "react-modal";

export default function ConfirmModal({ onClose, text }: any) {
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal isOpen onRequestClose={handleClose} ariaHideApp={false}>
      <p>{text}</p>
      <button onClick={handleClose}>확인</button>
    </ReactModal>
  );
}
