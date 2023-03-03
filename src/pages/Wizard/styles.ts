import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacings.large};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 8rem;
    gap: 12rem;
  }
`;

export const ReactSelectContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 500px;
  }
`;

export const reactSelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: theme.colors.background.main,
    padding: "1rem",
    borderColor: state.isFocused
      ? theme.colors.gray
      : theme.colors.background.main,

    fontSize: theme.font.sizes.xsmall,
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    fontSize: theme.font.sizes.xsmall,
    backgroundColor: theme.colors.background.main,
  }),

  group: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: theme.colors.background.main,
  }),
};
