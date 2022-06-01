import { ChevronRight } from "@styled-icons/fa-solid";
import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WizardState } from "../../store";
import Button from "../Button";
import * as S from "./styles";
import { setNextQuestion, setPreviousQuestion } from "../../store/ducks/wizard";

interface IWizardButton {
  disabled: boolean;
  question: string;
  children?: ReactNode;
}

const Question = ({ disabled, question, children }: IWizardButton) => {
  const dispatch = useDispatch();
  const { actualQuestion } = useSelector((store: WizardState) => store.wizard);

  return (
    <S.Container>
      <S.Label>{question}</S.Label>

      <S.ChildrenContainer>{children}</S.ChildrenContainer>

      <S.QuestionButtons>
        {actualQuestion !== 0 && (
          <Button
            backgroundLess
            onClick={() => dispatch(setPreviousQuestion())}
          >
            VOLTAR
          </Button>
        )}
        <S.NextButton>
          <Button
            disabled={disabled}
            icon={<ChevronRight />}
            onClick={() => dispatch(setNextQuestion())}
          />
        </S.NextButton>
      </S.QuestionButtons>
    </S.Container>
  );
};

export default Question;
