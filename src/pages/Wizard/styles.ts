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

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DownloadButton = styled.div`
  aling-self: center;
`;

export const ButtonDownloadTypography = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.large};
  font-szie: ${({ theme }) => theme.font.sizes.small};
`;
