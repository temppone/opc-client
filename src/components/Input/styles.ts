import styled, { css } from "styled-components";
import { IInput } from ".";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50rem;
`;

export const InputContainer = styled.div<Pick<IInput, "buttonChild">>`
  ${({ theme, buttonChild }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
    background-color: ${theme.colors.background.main};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${buttonChild
      ? `${theme.border.radius.small} 0 0 ${theme.border.radius.small}`
      : theme.border.radius.small};
  `}
`;

export const Input = styled.input<Pick<IInput, "buttonChild">>`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xsmall};
    border: none;
    outline: none;
    background: transparent;
    color: ${theme.colors.typography.main};
    padding: 1rem;

    ::placeholder {
      color: ${theme.colors.typography.darker};
    }
  `}
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.5rem;
    color: ${theme.colors.typography.main};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-style: none;
  cursor: pointer;

  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border-radius: 0 ${theme.border.radius.small} ${theme.border.radius.small} 0;
  `}

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
