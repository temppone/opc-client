import styled, { css } from "styled-components";
import { LogoProps } from ".";

const containerModifiers = {
  sm: () => css`
    width: 84px;
  `,

  md: () => css`
    width: 157px;
  `,

  lg: () => css`
    width: 30rem;
    height: 30rem;
  `,
};

export const Container = styled.div<LogoProps>`
  ${({ size }) => css`
    ${size && containerModifiers[size]};
  `}
`;
