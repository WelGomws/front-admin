import { MyModal, Container } from "./style";
import { useEffect, useState } from "react";

export const Modal = ({ open, setOpen, children }: any) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MyModal open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </MyModal>
  );
};
