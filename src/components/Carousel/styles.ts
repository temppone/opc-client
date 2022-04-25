import styled, { css } from "styled-components";

interface ICarousel {
  activeIndex: number;
}

interface IBar {
  active: boolean;
}

export const Container = styled.div`
  padding-top: 10rem;
  overflow: hidden;
`;

export const Inner = styled.div<ICarousel>`
  white-space: nowrap;
  transition: transform 0.3s;

  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

export const Tittle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: ${({ theme }) => theme.spacings.large};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    white-space: normal;
    width: 100%;
    text-align: center;
    margin-bottom: 10rem;

    padding: ${theme.spacings.small} ${theme.spacings.large};
  `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
  width: 100%;
  padding: ${({ theme }) => theme.spacings.medium};
`;

export const Bar = styled.div<IBar>`
  content: " ";
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.dark : "#1E89DB"};
  width: 48px;
  height: 3px;
`;

export const JumpButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    color: ${theme.colors.typography.main};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.weight.medium};
    cursor: pointer;
  `}
`;

export const StartButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacings.small};
    width: 100%;
    padding: ${({ theme }) => theme.spacings.medium};

    transition: all 0.3s;
  `}
`;
