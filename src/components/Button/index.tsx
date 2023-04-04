import { ChevronRight } from "@styled-icons/fa-solid";
import React, { ReactNode } from "react";
import * as S from "./styles";

export interface IButton {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "yellow" | "darkYellow";
  arrow?: boolean;
  onClick: () => void;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  backgroundLess?: boolean;
  disabled?: boolean;
  name?: string;
}

const Button = ({
  children,
  onClick,
  fullWidth,
  startIcon,
  endIcon,
  color = "yellow",
  arrow = false,
  size = "medium",
  disabled,
  backgroundLess,
  name,
}: IButton) => {
  return (
    <S.Container
      disabled={disabled}
      backgroundLess={backgroundLess}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
      hasIcon={!!startIcon || !!endIcon}
      color={color}
      arrow={arrow}
      name={name}
    >
      {startIcon}

      {!!children && <span>{children}</span>}

      {arrow ? (
        <S.Icon>
          <ChevronRight size={25} />
        </S.Icon>
      ) : (
        endIcon
      )}
    </S.Container>
  );
};

export default Button;
