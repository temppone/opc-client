import styled, { css } from "styled-components";
import { LogoDrawProps } from ".";

const containerModifiers = {
  sm: () => css`
    width: 31px;
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

export const Container = styled.div<LogoDrawProps>`
  ${({ size, responsive }) => css`
    ${size && containerModifiers[size]};
    ${responsive && containerModifiers.responsive};
  `}
`;
