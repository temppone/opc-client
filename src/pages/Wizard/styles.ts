import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacings.large};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    margin: 0 auto;
    padding-top: 8rem;
    gap: 12rem;
  }
`;
