import styled, { css, DefaultTheme } from "styled-components";
import { IButton } from "./index";

type ContainerProps = { hasIcon: boolean } & Pick<
  IButton,
  "size" | "fullWidth" | "color" | "arrow"
>;

const ContainerModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  yellow: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.main};
  `,

  darkYellow: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.dark};
  `,

  arrow: (theme: DefaultTheme) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0;
    font-weight: ${theme.font.weight.xxlarge};
    border-radius: ${theme.border.radius.small};
    background-color: ${theme.colors.secondary.main};
    font-size: ${theme.font.sizes.small};

    span {
      padding: 0 2rem;
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon, color, arrow }) => css`
    background-color: ${theme.colors.secondary.main};
    color: ${theme.colors.typography.dark};
    border: none;
    border-radius: ${theme.border.radius.large};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
    cursor: pointer;

    ${!!size && ContainerModifiers[size](theme)}
    ${!!fullWidth && ContainerModifiers.fullWidth()}
    ${!!hasIcon && ContainerModifiers.withIcon(theme)};
    ${!!color && ContainerModifiers[color](theme)};
    ${!!arrow && ContainerModifiers.arrow(theme)};
  `};
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary.dark};
  `};
`;
