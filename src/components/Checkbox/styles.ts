import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.background.main};
    border-radius: ${theme.border.radius.medium};
    margin: ${theme.spacings.xxsmall} 0;
  `}

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.background.darker};
  }
`;

export const Input = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;

  ${({ theme }) => css`
    border: 0.2rem solid ${theme.colors.background.dark};
    background-color: ${theme.colors.background.dark};
    transition: background border ${theme.transition.default};
    margin-right: ${theme.spacings.xxsmall};
  `}

  position: relative;
  outline: none;

  &::before {
    content: "";
    width: 0.6rem;
    height: 0.9rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.white};
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    top: 0.1rem;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition.default};
  }

  &:focus {
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.background.dark};
  }

  &:checked {
    ${({ theme }) => css`
      border-color: ${theme.colors.primary.dark};
      background: ${theme.colors.primary.dark};
    `}

    &::before {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.typography.main};
    line-height: 1;
    padding-left: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.weight.xsmall};
    cursor: pointer;
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;
