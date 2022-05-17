import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.medium};
    padding: ${theme.spacings.medium} 0;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    white-space: normal;
    width: 240px;
    line-height: 3rem;
    text-align: center;
  `}
`;
