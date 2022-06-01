import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    background-color: ${theme.colors.background.main};
    border-radius: ${theme.border.radius.medium};
    margin: ${theme.spacings.xxsmall} 0;
    cursor: pointer;
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary.dark};
    border-radius: 50%;
    background: transparent;
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary.dark};
    }

    &:before {
      content: "";
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary.dark};
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.typography.main};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.xsmall};
    cursor: pointer;
    margin-left: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`;
