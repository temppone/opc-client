import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
`;

export const List = styled.ul`
  ${({ theme }) => css`
    height: auto;
    position: relative;
    background-color: ${theme.colors.white};
    list-style: none;
    padding-left: 1rem;
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.typography.main};

    &:nth-last-child(1) {
      border-bottom-left-radius: ${theme.border.radius};
      border-bottom-right-radius: ${theme.border.radius};
    }

    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.typography.darker};
    }
  `}
`;
