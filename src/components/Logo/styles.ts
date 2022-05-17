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

  responsive: () => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 157px;

      svg {
        width: 157px;
      }
    }
  `,
};

export const Container = styled.div<LogoProps>`
  ${({ size, responsive, theme, isHome }) => css`
    ${size && containerModifiers[size]};
    ${responsive && containerModifiers.responsive};

    .cls-1 {
      fill: ${isHome ? theme.colors.white : theme.colors.primary.main};
    }
  `}
`;
