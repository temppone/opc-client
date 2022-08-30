import { Close } from "@styled-icons/material";
import React, { ReactNode, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOutsideClick";
import * as S from "./styles";

interface IModal {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, title, isOpen, onClose }: IModal) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useOnClickOutside(ref, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <S.Overlay>
      <S.Container ref={ref}>
        <S.Header>
          {title}
          <Close onClick={onClose} size={25} />
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
