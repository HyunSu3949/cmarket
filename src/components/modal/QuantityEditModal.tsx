import React, { useState } from "react";
import ReactModal from "react-modal";
import * as S from "components/ProductDetail/Product/ProductDetail.style";
import "./modal.css";
import styled from "styled-components";

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
    <ReactModal
      isOpen
      onRequestClose={handleClose}
      ariaHideApp={false}
      className={"ModalSmall"}
    >
      <BtnContainer>
        <S.QuantityBtn
          onClick={() => setQuantity((prev) => prev - 1)}
          disabled={quantity <= 1}
        >
          <S.MinusIcon />
        </S.QuantityBtn>
        <S.Quantity>{quantity}</S.Quantity>
        <S.QuantityBtn onClick={() => setQuantity((prev) => prev + 1)}>
          <S.PlusIcon />
        </S.QuantityBtn>
      </BtnContainer>
      <BtnContainer>
        <CancelBtn onClick={handleClose}>취소</CancelBtn>
        <EditBtn onClick={handleEdit}>수정</EditBtn>
      </BtnContainer>
    </ReactModal>
  );
}

const BtnContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const EditBtn = styled.button`
  text-align: center;
  width: 100px;
  height: 40px;
  background: #21bf48;
  border-radius: 5px;
  color: white;
`;

const CancelBtn = styled.button`
  text-align: center;
  width: 100px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-right: 5px;
`;
