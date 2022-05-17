import React from "react";
import * as S from "./styles";

interface IWizardLabel {
  text: string;
}

const WizardLabel = ({ text }: IWizardLabel) => {
  return <S.Container>{text}</S.Container>;
};

export default WizardLabel;
