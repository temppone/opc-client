import { Search } from "@styled-icons/fa-solid";
import { useForm } from "react-hook-form";
import { WizardContext } from "../../context/WizardContex";
import Button from "../Button";
import TextField from "../TextField";
import * as S from "./styles";
import { useContext } from "react";
import { ChevronRight } from "@styled-icons/material";

interface IPersonalData {
  fullNameLabel: string;
}

const PersonalData = ({ fullNameLabel }: IPersonalData) => {
  const { currentStep, previousStep, nextStep } = useContext(WizardContext);
  const { handleSubmit } = useForm();

  return (
    <S.Container>
      <S.InputGroupContainer>
        <TextField placeholder={fullNameLabel} />
        <TextField placeholder="CPF/CNPJ" />
      </S.InputGroupContainer>

      <S.InputGroupContainer>
        <S.CepContainer>
          <TextField
            placeholder="00000-000"
            buttonChild={
              <S.ButtonTextField>
                <Search size="2rem" color="white" />
              </S.ButtonTextField>
            }
          />
        </S.CepContainer>

        <TextField placeholder="Endereço" />

        <S.AddressDataContainer>
          <S.UfNumberContainer>
            <TextField placeholder="UF" />
            <TextField placeholder="N°" />
          </S.UfNumberContainer>

          <S.CityComplementContainer>
            <TextField placeholder="Cidade" />
            <TextField placeholder="Complemento" />
          </S.CityComplementContainer>
        </S.AddressDataContainer>
      </S.InputGroupContainer>

      <S.QuestionButtons>
        {currentStep !== 0 && (
          <Button backgroundLess onClick={() => previousStep()}>
            VOLTAR
          </Button>
        )}

        <S.NextButton>
          <Button
            icon={<ChevronRight />}
            onClick={() => {
              nextStep();
            }}
          />
        </S.NextButton>
      </S.QuestionButtons>
    </S.Container>
  );
};

export default PersonalData;
