import styled, { css } from "styled-components";
import { IHeader } from "./index";

export const Content = styled.header<IHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.spacings.xsmall};
  background-color: ${({ theme, withIcon }) =>
    withIcon ? theme.colors.white : theme.colors.primary.main};
  height: 80px;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1280px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ withIcon }) => css`
      justify-content: ${withIcon ? "space-between" : "center"};
    `}
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  cursor: pointer;

  svg {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 5%;
  }
`;
