import ReactModal from "react-modal";

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
    <ReactModal isOpen onRequestClose={handleClose} ariaHideApp={false}>
      <button onClick={handleClose}>마이페이지</button>
      <button onClick={handleLogout}>로그아웃</button>
    </ReactModal>
  );
}
