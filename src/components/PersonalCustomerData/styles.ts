import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
  }
`;

export const ButtonTextField = styled.div`
  padding: 0.9rem;
`;

export const CepContainer = styled.div`
  width: 177px;
`;

export const UfNumberContainer = styled.div`
  width: 93px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const SmallTextField = styled.div`
  width: 99px;
`;

export const CityComplementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FullWidthTextField = styled.div`
  width: 100%;
`;

export const TwoInputsRow = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const AddressDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QuestionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NextButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
