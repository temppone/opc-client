import styled, { css } from "styled-components";

interface ISelectStyle {
  showOptions: boolean;
}

interface IIcon {
  showOptions: boolean;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.border.radius.small}
    ${({ theme }) => theme.border.radius.small} 0 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.xsmall};
  gap: 10px;
  position: relative;
  cursor: pointer;
  width: 100%;
`;

export const Select = styled.div<ISelectStyle>`
  position: absolute;
  top: calc(100%);
  left: 0px;
  width: 100%;
  z-index: 1000;

  ${({ showOptions, theme }) => css`
    display: ${showOptions ? "block" : "none"};
    border-radius: 0 0 ${theme.border.radius.small} ${theme.border.radius.small};
    background: ${theme.colors.background.main};
  `};

  cursor: default;
  max-height: 210px;
  overflow-y: auto;
`;

export const Option = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.typography.main};
    font-weight: ${theme.font.weight.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};

    :last-child {
      border-radius: 0 0 ${theme.border.radius.small}
        ${theme.border.radius.small};
    }
  `}

  position: relative;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Placeholder = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.typography.main};
    font-weight: ${theme.font.weight.xsmall};
  `}

  margin: 0;
`;

export const Icon = styled.div<IIcon>`
  display: flex;
  align-items: center;

  ${({ theme, showOptions }) => css`
    transform: ${showOptions ? "rotate(180deg)" : "rotate(0deg)"};

    svg {
      color: ${theme.colors.primary.main};
    }
  `}
`;

export const Selected = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.typography.main};
    font-weight: ${theme.font.weight.medium};
  `}
`;
