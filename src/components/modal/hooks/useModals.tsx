import React, { useContext } from "react";
import { ModalsDispatchContext } from "./../ModalProvider";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (component: React.FC<any>, props: any) => {
    open(component, props);
  };
  const closeModal = (component: React.FC<any>) => {
    close(component);
  };

  return { openModal, closeModal };
}
