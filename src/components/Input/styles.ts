import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  max-width: 50rem;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
    background-color: ${theme.colors.background.main};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius.small};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xsmall};
    border: none;
    outline: none;
    background: transparent;
    color: ${theme.colors.typography.main};
    border-radius: ${theme.border.radius};

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
