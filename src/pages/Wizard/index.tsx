/* eslint-disable @typescript-eslint/no-explicit-any */
import br from "date-fns/locale/pt-BR";
import { useContext, useEffect, useState } from "react";
import Question from "../../components/Question";
import { WizardContext } from "../../context/WizardContex";
import * as S from "./styles";

import { registerLocale } from "react-datepicker";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import { IFinalData } from "../../@types/wizard";
import PersonalCustomerData from "../../components/PersonalCustomerData";
import PersonalProviderData from "../../components/PersonalProviderData";
import { useContractForm } from "../../services/hooks/contracts/useContractForm";
import { useContractTypes } from "../../services/hooks/contracts/useContractTypes";
import { current } from "@reduxjs/toolkit";
import TextField from "../../components/TextField";

registerLocale("br", br);

const Wizard = () => {
  const [disabled, setDisabled] = useState(true);
  const [finalData, setFinalData] = useState<IFinalData>();
  const theme = useTheme();
  const [contractType, setContractType] = useState<string | undefined>("");

  const { currentStep } = useContext(WizardContext);

  const {
    data: contractsTypeData,
    isLoading: contractsTypeIsLoading,
    error: contractsTypeError,
  } = useContractTypes();

  const {
    data: contractForm,
    isLoading: contractFormIsLoading,
    error: contractFormError,
  } = useContractForm(contractType);

  const handleChangeFinalData = ({ type }: IFinalData) => {
    setFinalData({ ...finalData, type });
    setDisabled(false);
  };

  const currentQuestion = contractForm?.contractFormType.inputs.find(
    (input) => currentStep === input.position
  );

  const contractTypesOptions = contractsTypeData?.contractsTypes.map(
    (contractType) => {
      return {
        id: contractType.id,
        label: contractType.label,
        type: contractType.type,
      };
    }
  );

  const stepButtons =
    currentQuestion?.type === "personalClientData" ||
    currentQuestion?.type === "personalProviderData";

  useEffect(() => {
    console.log({ currentQuestion });
    console.log({ contractForm });
  }, [currentQuestion]);

  //Duvidas com o dudu
  //Ordenação do array do backend de acordo com o necessário, atualmente quando renderizo no frontend ele vem desorganizado
  //Alternativas para a formação do wizard de acordo com o que eu tô fazendo
  //O que ele acha do meu backend

  return (
    <S.Container>
      {contractFormIsLoading || contractType ? null : (
        <Question
          question="Escolha o tipo de contrato"
          disabled={disabled}
          onNextQuestion={() => setContractType(finalData?.type)}
        >
          <ReactSelect
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: theme.colors.background.main,
                padding: "1rem",
                borderColor: state.isFocused
                  ? theme.colors.gray
                  : theme.colors.background.main,

                fontSize: theme.font.sizes.xsmall,
              }),
              option: (baseStyles) => ({
                ...baseStyles,
                fontSize: theme.font.sizes.xsmall,
                backgroundColor: theme.colors.background.main,
              }),

              group: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: theme.colors.background.main,
              }),
            }}
            options={contractTypesOptions}
            placeholder="Selecione"
            onChange={(e) => {
              setDisabled(!e?.type);
              handleChangeFinalData({
                type: e?.type,
              });
            }}
            isLoading={contractsTypeIsLoading}
          />
        </Question>
      )}

      {currentQuestion?.type === "personalProviderData" ? (
        <Question
          key={currentQuestion?.id}
          disabled={currentQuestion?.required || false}
          question={currentQuestion?.question_label}
          stepButtons={!stepButtons}
        >
          <PersonalProviderData
            fullNameLabel="Seu nome completo"
            onDataValidate={(data: any) =>
              setFinalData({
                ...finalData,
                personalProviderData: data,
              })
            }
          />
        </Question>
      ) : null}

      {currentQuestion?.type === "personalClientData" ? (
        <Question
          key={currentQuestion?.id}
          disabled={currentQuestion?.required || false}
          question={currentQuestion?.question_label}
          stepButtons={!stepButtons}
        >
          <PersonalCustomerData
            customerFullNameLabel="Nome completo do cliente"
            onDataValidate={(data: any) =>
              setFinalData({
                ...finalData,
                personalCustomerData: data,
              })
            }
          />
        </Question>
      ) : null}

      {currentQuestion?.type !== "personalProviderData" &&
      currentQuestion?.type !== "personalClientData" &&
      currentQuestion?.type === "text" ? (
        <Question
          key={currentQuestion?.id}
          disabled={disabled || false}
          question={currentQuestion?.question_label}
        >
          <TextField
            onChange={(data) => {
              console.log(data.target.value);
              setDisabled(!data.target.value);
              setFinalData({ ...finalData, durationTime: data.target.value });
            }}
          />
        </Question>
      ) : null}

      {currentQuestion?.type !== "personalProviderData" &&
      currentQuestion?.type !== "personalClientData" &&
      currentQuestion?.type === "currency" ? (
        <Question
          key={currentQuestion?.id}
          disabled={disabled || false}
          question={currentQuestion?.question_label}
        >
          <TextField
            onChange={(data) => {
              console.log(data.target.value);
              setDisabled(!data.target.value);
              setFinalData({ ...finalData, durationTime: data.target.value });
            }}
          />
        </Question>
      ) : null}
    </S.Container>
  );
};

export default Wizard;
