import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronRight, Search } from "@styled-icons/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { WizardContext } from "../../context/WizardContext";
import { useAddressSearch } from "../../services/hooks/address/useAddressSearch";
import { cepMask, cpfCnpjMask } from "../../utils/masks";
import Button from "../Button";
import TextField from "../TextField";
import * as S from "./styles";

interface IPersonalCustomerData {
  customerFullNameLabel: string;
  onDataValidate: (personalData: IPersonalCustomerForm) => void;
}

export interface IPersonalCustomerForm {
  customerFullName: string;
  customerDocument: string;
  customerCep: string;
  customerState: string;
  customerComplement: string;
  customerAddressNumber: number;
  customerCity: string;
  customerAddress: string;
}

const PersonalCustomerData = ({
  customerFullNameLabel,
  onDataValidate,
}: IPersonalCustomerData) => {
  const { currentStep, previousStep, nextStep } = useContext(WizardContext);
  const [cep, setCep] = useState("");

  const schema = yup.object({
    customerFullName: yup.string().required("Obrigatório"),
    customerDocument: yup.string().required("Obrigatório"),
    customerCep: yup.string().required("Obrigatório"),
    customerAddress: yup.string().required("Obrigatório"),
    customerState: yup.string().required("Obrigatorio"),
    complement: yup.string(),
    customerAddressNumber: yup.number().required("Obrigatório"),
    customerCity: yup.string().required("Obrigatório"),
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IPersonalCustomerForm>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    onDataValidate?.(data);

    nextStep();
  });

  const watchCep = watch("customerCep");

  const {
    data: customerAddressSearchData,
    isLoading: customerAddressSearchIsLoading,
  } = useAddressSearch(cep);

  return (
    <S.Container>
      <S.InputGroupContainer>
        <Controller
          control={control}
          name="customerFullName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="customerFullName"
              value={value || ""}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.customerFullName}
              helperText={errors.customerFullName?.message ?? ""}
              placeholder={customerFullNameLabel}
            />
          )}
        />

        <Controller
          control={control}
          name="customerDocument"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="customerDocument"
              value={cpfCnpjMask(value) || ""}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.customerDocument}
              helperText={errors.customerDocument?.message ?? ""}
              placeholder="CPF/CNPJ"
            />
          )}
        />
      </S.InputGroupContainer>

      <S.InputGroupContainer>
        <S.CepContainer>
          <Controller
            control={control}
            name="customerCep"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                name="customerCep"
                value={cepMask(value) || ""}
                onChange={onChange}
                onBlur={onBlur}
                isError={!!errors.customerCep}
                helperText={errors.customerCep?.message ?? ""}
                placeholder="00000-000"
                disabled={customerAddressSearchIsLoading}
                buttonChild={
                  <S.ButtonTextField onClick={() => setCep(watchCep)}>
                    <Search size="2rem" color="white" />
                  </S.ButtonTextField>
                }
              />
            )}
          />
        </S.CepContainer>

        <Controller
          control={control}
          name="customerAddress"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="customerAddress"
              value={value || customerAddressSearchData?.logradouro || ""}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.customerAddress}
              helperText={errors.customerAddress?.message ?? ""}
              placeholder="Endereço"
            />
          )}
        />

        <S.AddressDataContainer>
          <S.UfNumberContainer>
            <Controller
              control={control}
              name="customerState"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="customerState"
                  value={value || customerAddressSearchData?.uf || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.customerState}
                  helperText={errors.customerState?.message ?? ""}
                  placeholder="UF"
                />
              )}
            />

            <Controller
              control={control}
              name="customerAddressNumber"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="customerAddressNumber"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.customerAddressNumber}
                  helperText={errors.customerAddressNumber?.message ?? ""}
                  placeholder="N°"
                />
              )}
            />
          </S.UfNumberContainer>

          <S.CityComplementContainer>
            <Controller
              control={control}
              name="customerCity"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="customerCity"
                  value={value || customerAddressSearchData?.localidade || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.customerCity}
                  helperText={errors.customerCity?.message ?? ""}
                  placeholder="Cidade"
                />
              )}
            />

            <Controller
              control={control}
              name="customerComplement"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="customerComplement"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.customerComplement}
                  helperText={errors.customerComplement?.message ?? ""}
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
            icon={<ChevronRight />}
            onClick={() => {
              onSubmit();
            }}
          />
        </S.NextButton>
      </S.QuestionButtons>
    </S.Container>
  );
};

export default PersonalCustomerData;
