import React, { useContext, Component } from "react";
import styled from "styled-components";

import QuantityEditModal from "src/components/modal/QuantityEditModal";
import MyModal from "src/components/modal/MyModal";

import ConfirmModal from "./ConfirmModal";
import {
  ModalsStateContext,
  ModalsDispatchContext,
} from "src/components/modal/ModalProvider";

export const modals = {
  quantityEditModal: QuantityEditModal,
  myModal: MyModal,
  confirmModal: ConfirmModal,
};

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return (
    <>
      {openedModals.map((modal, idx) => {
        const { Component, props } = modal;
        const onClose = () => {
          close(Component);
        };
        return <Component {...props} key={idx} onClose={onClose} />;
      })}
    </>
  );
}

const StyledBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;
