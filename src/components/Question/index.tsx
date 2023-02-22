import { ChevronRight } from "@styled-icons/fa-solid";
import { ReactNode, useContext } from "react";
import { WizardContext } from "../../contexts/WizardContext";
import Button from "../Button";
import * as S from "./styles";

interface IWizardButton {
  disabled?: boolean;
  question: string;
  children?: ReactNode;
  submit: () => void;
  questionsLength: number;
}

const Question = ({
  disabled,
  question,
  children,
  submit,
  questionsLength,
}: IWizardButton) => {
  const { currentStep, nextStep, previousStep } = useContext(WizardContext);

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
            onSubmit={currentStep === questionsLength - 1 ? submit : undefined}
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
