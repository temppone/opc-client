import styled, { css } from "styled-components";
import { IInput } from ".";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50rem;
`;

export const InputContainer = styled.div<
  Pick<IInput, "buttonChild" | "isError">
>`
  ${({ theme, buttonChild, isError }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
    background-color: ${theme.colors.background.main};
    padding: ${theme.spacings.xxsmall};
    box-shadow: ${isError ? `0 0 0 2px ${theme.colors.error}` : ""};
    border-radius: ${buttonChild
      ? `${theme.border.radius.small} 0 0 ${theme.border.radius.small}`
      : theme.border.radius.small};

    :focus-within {
      box-shadow: 0 0 0 2px ${theme.colors.gray};
    }
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

export const Button = styled.button<{ disabled?: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-style: none;
  cursor: pointer;

  ${({ theme, disabled }) => css`
    padding: ${theme.spacings.xxsmall};
    border-radius: 0 ${theme.border.radius.small} ${theme.border.radius.small} 0;

    opacity: ${disabled ? "0.8" : "1"};
    cursor: ${disabled ? "not-allowed" : "pointer"};
  `}

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const HelperText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 2px;
  height: 18px;
`;
