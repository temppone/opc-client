import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 90vh;

  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;
