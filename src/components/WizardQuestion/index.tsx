import React from "react";
import WizardButtons from "../WizardButtons";
import WizardLabel from "../WizardLabel";
import * as S from "./styles";

interface IWizardQuestion {
  children?: React.ReactNode;
  question: string;
}

const WizardQuestion = ({ children, question }: IWizardQuestion) => {
  return (
    <S.Container>
      <S.QuestionContainer>
        <WizardLabel text={question} />
      </S.QuestionContainer>

      <S.ChildrenContainer>{children}</S.ChildrenContainer>
      <S.ButtonsContainer>
        <WizardButtons />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default WizardQuestion;
