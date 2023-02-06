import { useState, useMemo, createContext, ReactNode } from "react";

type dispatch = {
  open: (Component: React.FC, props: any) => void;
  close: (Component: React.FC) => void;
};

export const ModalsDispatchContext = createContext<dispatch>({
  open: () => undefined,
  close: () => undefined,
});

type Modal = {
  Component: React.FC;
  props: any;
};

export const ModalsStateContext = createContext<Modal[]>([]);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [openedModals, setOpenedModals] = useState<Modal[]>([]);

  const open = (Component: React.FC, props: any) => {
    setOpenedModals((modals: Modal[]) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: React.FC) => {
    setOpenedModals((modals: Modal[]) => {
      return modals.filter((modal: any) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
