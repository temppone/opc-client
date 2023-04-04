/* eslint-disable @typescript-eslint/no-explicit-any */
import br from "date-fns/locale/pt-BR";
import { Fragment, useContext, useState } from "react";
import { registerLocale } from "react-datepicker";
import { toast } from "react-hot-toast";
import ReactSelect from "react-select";
import { useTheme } from "styled-components";
import { IFinalData } from "../../@types/wizard";
import { splashSuccess } from "../../assets/Lotties/splashSuccess";
import PersonalCustomerData from "../../components/PersonalCustomerData";
import PersonalProviderData, {
  IPersonalProviderForm,
} from "../../components/PersonalProviderData";
import Question from "../../components/Question";
import TextField from "../../components/TextField";
import { WizardContext } from "../../context/WizardContext";
import { useContractForm } from "../../services/hooks/contracts/useContractForm";
import { useContractTypes } from "../../services/hooks/contracts/useContractTypes";
import { useGenerateContract } from "../../services/hooks/contracts/useGenerateContract";
import * as S from "./styles";
import Lottie from "react-lottie";
import Button from "../../components/Button";
import { Download } from "@styled-icons/material";

registerLocale("br", br);

const Wizard = () => {
  const [disabled, setDisabled] = useState(true);
  const [finalData, setFinalData] = useState<IFinalData>();
  const theme = useTheme();
  const [contractType, setContractType] = useState<string | undefined>("");
  const lottieOptions = {
    animationData: splashSuccess,
    loop: false,
  };

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

  const contractTypesOptions = contractsTypeData?.contractsFormsTypes.map(
    (contractsFormsType) => {
      return {
        id: contractsFormsType.id,
        label: contractsFormsType.label,
        type: contractsFormsType.type,
      };
    }
  );

  const isLastQuestion =
    currentQuestion?.position === contractForm?.contractFormType.inputs.length;

  const stepButtons =
    currentQuestion?.type === "personalClientData" ||
    currentQuestion?.type === "personalProviderData";

  const generateContract = useGenerateContract({
    onSuccess: () => {
      toast.success("Sucesso!");
    },
    onError: () => {
      toast.error("Algo deu errado :(");
    },
  });

  const downloadPdf = (data: Blob, fileName: string) => {
    const href = URL.createObjectURL(data);

    const link = document.createElement("a");

    link.setAttribute("href", href);
    link.setAttribute("download", `${fileName}.pdf`);

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  const contractName = `Contrato_${finalData?.personalCustomerData?.customerFullName
    .split(" ")
    .slice(0, 1)}_${Intl.DateTimeFormat("pt-BR").format(new Date())}`;

  return (
    <S.Container>
      {generateContract.isSuccess ? (
        <S.SuccessContainer>
          <Lottie options={lottieOptions} height={400} width={400} />
          <S.DownloadButton>
            <Button
              startIcon={<Download size={25} />}
              onClick={() => downloadPdf(generateContract.data, contractName)}
            >
              <S.ButtonDownloadTypography>DOWNLOAD</S.ButtonDownloadTypography>
            </Button>
          </S.DownloadButton>
        </S.SuccessContainer>
      ) : (
        <Fragment>
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
                onDataValidate={(data: IPersonalProviderForm) =>
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

          {currentQuestion?.type === "text" ? (
            <Question
              key={currentQuestion?.id}
              disabled={disabled || false}
              question={currentQuestion?.question_label}
              isLastQuestion={isLastQuestion}
              lastQuestionFunction={() =>
                generateContract.mutateAsync(finalData || {})
              }
            >
              <TextField
                onChange={(data) => {
                  setDisabled(!data.target.value);
                  setFinalData({
                    ...finalData,
                    [currentQuestion.name]: data.target.value,
                  });
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
                onlyNumber
                onChange={(data) => {
                  setDisabled(!data.target.value);
                  setFinalData({
                    ...finalData,
                    [currentQuestion.name]: data.target.value,
                  });
                }}
              />
            </Question>
          ) : null}
        </Fragment>
      )}
    </S.Container>
  );
};

export default Wizard;
