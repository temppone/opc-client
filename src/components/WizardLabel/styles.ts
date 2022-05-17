import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.typography.dark};
    line-height: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;
