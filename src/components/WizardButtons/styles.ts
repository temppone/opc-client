import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xsmall};
  width: 100%;
`;

export const NextButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
