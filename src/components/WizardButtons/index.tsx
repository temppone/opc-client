import { ChevronRight } from "@styled-icons/fa-solid";
import { useContext } from "react";
import { WizardContext } from "../../contexts/WizardContext";
import Button from "../Button";
import * as S from "./styles";

interface IWizardButton {
  disabled: boolean;
}

const WizardButtons = ({ disabled }: IWizardButton) => {
  const { currentStep, nextStep, previousStep } = useContext(WizardContext);

  return (
    <S.Container>
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
    </S.Container>
  );
};

export default WizardButtons;
