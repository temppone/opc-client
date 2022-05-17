import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding-top: ${({ theme }) => theme.spacings.large};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.spacings.xxlarge};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-top: ${({ theme }) => theme.spacings.medium};
  }
`;

export const CardsContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 10rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.spacings.xxlarge};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ theme }) => theme.spacings.xxlarge};
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacings.xsmall};
    width: 100%;
    margin-top: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: 7rem;
  }
`;
