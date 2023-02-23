import { ChevronRight } from "@styled-icons/fa-solid";
import React, { ReactNode, useContext } from "react";
import { WizardContext } from "../../context/WizardContex";
import Button from "../Button";
import * as S from "./styles";

interface IWizardButton {
  disabled: boolean;
  question: string;
  children?: ReactNode;
}

const Question = ({ disabled, question, children }: IWizardButton) => {
  const { currentStep, previousStep, nextStep } = useContext(WizardContext);

  return (
    <S.Container>
      <S.Label>{question}</S.Label>

      <S.ChildrenContainer>{children}</S.ChildrenContainer>

      <S.QuestionButtons>
        {currentStep !== 0 && (
          <Button backgroundLess onClick={() => previousStep()}>
            VOLTAR
          </Button>
        )}
        <S.NextButton>
          <Button
            disabled={disabled}
            icon={<ChevronRight />}
            onClick={() => nextStep()}
          />
        </S.NextButton>
      </S.QuestionButtons>
    </S.Container>
  );
};

export default Question;
