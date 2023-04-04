/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Search } from "@styled-icons/fa-solid";
import { ChevronRight } from "@styled-icons/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { WizardContext } from "../../context/WizardContext";
import { useAddressSearch } from "../../services/hooks/address/useAddressSearch";
import { cepMask, cpfCnpjMask } from "../../utils/masks";
import Button from "../Button";
import TextField from "../TextField";
import * as S from "./styles";

interface IPersonalProviderData {
  fullNameLabel: string;
  onDataValidate: (personalData: IPersonalProviderForm) => void;
}

export interface IPersonalProviderForm {
  providerFullName: string;
  providerDocument: string;
  providerCep: string;
  providerState: string;
  providerComplement: string;
  providerAddressNumber: number;
  providerCity: string;
  providerAddress: string;
}

const PersonalProviderData = ({
  fullNameLabel,
  onDataValidate,
}: IPersonalProviderData) => {
  const { currentStep, previousStep, nextStep } = useContext(WizardContext);
  const [cep, setCep] = useState("");

  const schema = yup.object({
    providerFullName: yup.string().required("Obrigatório"),
    providerDocument: yup
      .string()
      .required("Obrigatório")
      .matches(
        /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/,
        "Documento inválido"
      ),
    providerCep: yup
      .string()
      .required("Obrigatório")
      .matches(/^(\d{5}-\d{3})$/, "Cep invalido"),
    providerAddress: yup.string().required("Obrigatório"),
    providerState: yup.string().required("Obrigatorio"),
    providerComplement: yup.string(),
    providerAddressNumber: yup.number().required("Obrigatório"),
    providerCity: yup.string().required("Obrigatório"),
  });

  const {
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors },
  } = useForm<IPersonalProviderForm>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    onDataValidate?.(data);

    nextStep();
  });

  const watchCep = watch("providerCep");

  const { data: addressSearchData, isLoading: addressSearchIsLoading } =
    useAddressSearch(cep);

  const handleCep = async () => {
    const providerCepTrigger = await trigger(["providerCep"]);

    if (providerCepTrigger) {
      setCep(watchCep);
    }
  };

  return (
    <S.Container>
      <S.InputGroupContainer>
        <Controller
          control={control}
          name="providerFullName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="providerFullName"
              value={value || ""}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.providerFullName}
              helperText={errors.providerFullName?.message ?? ""}
              placeholder={fullNameLabel}
            />
          )}
        />

        <Controller
          control={control}
          name="providerDocument"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="providerDocument"
              value={cpfCnpjMask(value) || ""}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.providerDocument}
              helperText={errors.providerDocument?.message ?? ""}
              placeholder="CPF/CNPJ"
              maxLength={18}
            />
          )}
        />
      </S.InputGroupContainer>

      <S.InputGroupContainer>
        <S.CepContainer>
          <Controller
            control={control}
            name="providerCep"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                name="providerCep"
                value={cepMask(value) || ""}
                onChange={onChange}
                onBlur={onBlur}
                isError={!!errors.providerCep}
                helperText={errors.providerCep?.message ?? ""}
                placeholder="00000-000"
                maxLength={9}
                isLoading={addressSearchIsLoading}
                buttonChild={
                  <S.ButtonTextField onClick={() => handleCep()}>
                    <Search size="2rem" color="white" />
                  </S.ButtonTextField>
                }
              />
            )}
          />
        </S.CepContainer>

        <Controller
          control={control}
          name="providerAddress"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="providerAddress"
              value={value || addressSearchData?.logradouro || ""}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.providerAddress}
              helperText={errors.providerAddress?.message ?? ""}
              placeholder="Endereço"
            />
          )}
        />

        <S.AddressDataContainer>
          <S.UfNumberContainer>
            <Controller
              control={control}
              name="providerState"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="providerState"
                  value={value || addressSearchData?.uf || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.providerState}
                  helperText={errors.providerState?.message ?? ""}
                  placeholder="UF"
                />
              )}
            />

            <Controller
              control={control}
              name="providerAddressNumber"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="providerAddressNumber"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.providerAddressNumber}
                  helperText={errors.providerAddressNumber?.message ?? ""}
                  placeholder="N°"
                />
              )}
            />
          </S.UfNumberContainer>

          <S.CityComplementContainer>
            <Controller
              control={control}
              name="providerCity"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="providerCity"
                  value={value || addressSearchData?.localidade || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.providerCity}
                  helperText={errors.providerCity?.message ?? ""}
                  placeholder="Cidade"
                />
              )}
            />

            <Controller
              control={control}
              name="providerComplement"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="providerComplement"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.providerComplement}
                  helperText={errors.providerComplement?.message ?? ""}
                  placeholder="Complemento"
                />
              )}
            />
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
            endIcon={<ChevronRight size={20} />}
            onClick={() => {
              onSubmit();
            }}
          />
        </S.NextButton>
      </S.QuestionButtons>
    </S.Container>
  );
};

export default PersonalProviderData;
