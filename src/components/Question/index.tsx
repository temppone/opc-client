import { ChevronRight } from "@styled-icons/fa-solid";
import React, { ReactNode, useContext } from "react";
import { WizardContext } from "../../context/WizardContext";
import Button from "../Button";
import * as S from "./styles";

interface IWizardButton {
  disabled: boolean;
  question?: string;
  children?: ReactNode;
  onNextQuestion?: () => void;
  stepButtons?: boolean;
  lastQuestionFunction?: () => void;
  isLastQuestion?: boolean;
}

const Question = ({
  disabled,
  question,
  children,
  onNextQuestion,
  stepButtons = true,
  lastQuestionFunction,
  isLastQuestion,
}: IWizardButton) => {
  const { currentStep, previousStep, nextStep } = useContext(WizardContext);

  return (
    <S.Container>
      <S.Label>{question}</S.Label>

      <S.ChildrenContainer>{children}</S.ChildrenContainer>

      {stepButtons ? (
        <S.QuestionButtons>
          {currentStep !== 0 && (
            <Button backgroundLess onClick={() => previousStep()}>
              VOLTAR
            </Button>
          )}

          <S.NextButton>
            {isLastQuestion ? (
              <Button arrow onClick={() => lastQuestionFunction?.()}>
                Concluir
              </Button>
            ) : (
              <Button
                disabled={disabled}
                endIcon={<ChevronRight size={20} />}
                onClick={() => {
                  onNextQuestion?.();
                  nextStep();
                }}
              />
            )}
          </S.NextButton>
        </S.QuestionButtons>
      ) : null}
    </S.Container>
  );
};

export default Question;
