import { ChevronRight } from "@styled-icons/fa-solid";
import React, { ReactNode, HTMLAttributes } from "react";
import * as S from "./styles";

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "yellow" | "darkYellow";
  arrow?: boolean;
  onClick: () => void;
  fullWidth?: boolean;
  icon?: ReactNode;
  backgroundLess?: boolean;
  disabled?: boolean;
  name?: string;
}

const Button = ({
  children,
  onClick,
  fullWidth,
  icon,
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
      hasIcon={!!icon}
      color={color}
      arrow={arrow}
      name={name}
    >
      {!!children && <span>{children}</span>}

      {arrow ? (
        <S.Icon>
          <ChevronRight size={25} />
        </S.Icon>
      ) : (
        icon
      )}
    </S.Container>
  );
};

export default Button;
