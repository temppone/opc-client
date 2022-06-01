import React from "react";
import WizardButtons from "../WizardButtons";
import * as S from "./styles";

interface IWizardQuestion {
  children?: React.ReactNode;
  question: string;
  disabled: boolean;
}

const WizardQuestion = ({ children, question, disabled }: IWizardQuestion) => {
  return (
    <S.Container>
      <S.QuestionContainer></S.QuestionContainer>

      <S.ChildrenContainer>{children}</S.ChildrenContainer>

      <S.ButtonsContainer>
        <WizardButtons disabled={disabled} />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default WizardQuestion;
