import React, { useState } from "react";
import ReactModal from "react-modal";

export default function QuantityEditModal({
  onClose,
  onEdit,
  prevQuantity,
  product_id,
}: any) {
  const [quantity, setQuantity] = useState<number>(prevQuantity);

  const handleClose = () => {
    onClose();
  };

  const handleEdit = () => {
    onEdit({ product_id, quantity, is_active: true });
    onClose();
  };

  return (
    <ReactModal isOpen onRequestClose={handleClose} ariaHideApp={false}>
      <button onClick={() => setQuantity((prev) => prev - 1)}>| - |</button>
      <span> {quantity}</span>
      <button onClick={() => setQuantity((prev) => prev + 1)}>| + |</button>
      <div>
        <button onClick={handleClose}>취소</button>
        <button onClick={handleEdit}>수정</button>
      </div>
    </ReactModal>
  );
}
