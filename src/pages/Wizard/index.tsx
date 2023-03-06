/* eslint-disable @typescript-eslint/no-explicit-any */
import br from "date-fns/locale/pt-BR";
import { useContext, useEffect, useState } from "react";
import TextField from "../../components/TextField";
import Question from "../../components/Question";
import { WizardContext } from "../../context/WizardContex";
import Radio from "./../../components/Radio/index";
import Select from "./../../components/Select/index";
import * as S from "./styles";

import { registerLocale } from "react-datepicker";
import CalendarPicker from "../../components/DatePicker";
import PersonalData from "../../components/PersonalData";
import AutoComplete from "../../components/AutoComplete";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import { IFinalData } from "../../@types/wizard";
import { useContractForm } from "../../services/hooks/contracts/useContractForm";
import { useContractTypes } from "../../services/hooks/contracts/useContractTypes";

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

  useEffect(() => {
    console.log(disabled);
  }, [disabled]);

  const {
    data: contractForm,
    isLoading: contractFormIsLoading,
    error: contractFormError,
  } = useContractForm(contractType);

  const handleChangeFinalData = ({ type }: IFinalData) => {
    setFinalData({ ...finalData, type });
    setDisabled(false);
  };

  const currentQuestion = contractForm?.contractType.inputs[currentStep];

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

  return (
    <S.Container>
      <S.ReactSelectContainer></S.ReactSelectContainer>
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

      <Question
        key={currentQuestion?.questionLabel}
        disabled={currentQuestion?.required || false}
        question={currentQuestion?.questionLabel}
        stepButtons={!stepButtons}
      >
        {currentQuestion?.type === "personalClientData" ? (
          <PersonalData
            fullNameLabel="Seu nome completo"
            onPasswordValidate={(data: any) =>
              setFinalData({
                ...finalData,
                personalClientData: data,
              })
            }
          />
        ) : null}

        {/* {currentQuestion.type === "select" ? (
          <Select
            id={currentQuestion.placeholder || ""}
            placeholder={currentQuestion.placeholder}
            items={currentQuestion.answers || []}
            onChange={(value) => {
              value === "" ? setDisabled(true) : setDisabled(false);
              handleChangeFinalData(value, currentQuestion.name);
            }}
          />
        ) : null}

        {currentQuestion.type === "text" ? (
          <Input
            placeholder={currentQuestion.placeholder}
            onChange={(value) => {
              value.target.value === ""
                ? setDisabled(true)
                : setDisabled(false);
              handleChangeFinalData(value.toString(), currentQuestion.name);
            }}
          />
        ) : null} */}
      </Question>
    </S.Container>
  );
};

export default Wizard;
