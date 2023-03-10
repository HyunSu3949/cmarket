import { useContext } from "react";

import QuantityEditModal from "components/modal/QuantityEditModal";
import MyModal from "components/modal/MyModal";

import ConfirmModal from "./ConfirmModal";
import {
  ModalsStateContext,
  ModalsDispatchContext,
} from "components/modal/ModalProvider";

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
