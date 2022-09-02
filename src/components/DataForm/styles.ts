import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
  width: 100%;
`;

export const CepContainer = styled.div`
  width: 177px;
`;

export const DoubleInputContainer = styled.div`
  display: flex;
`;

export const SmallInput = styled.div`
  width: 93px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
