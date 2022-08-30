import styled, { css } from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(12, 34, 50, 0.5);
  z-index: 1;
`;

export const Container = styled.div`
  position: fixed;
  background: white;
  width: 354px;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${({ theme }) => theme.border.radius.small};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 70px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  ${({ theme }) => css`
    border-bottom: solid 1px ${theme.colors.gray};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  height: 80%;
  overflow-y: auto;
`;
