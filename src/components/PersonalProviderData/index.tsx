import { yupResolver } from "@hookform/resolvers/yup";
import { Search, Spinner } from "@styled-icons/fa-solid";
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
  fullName: string;
  document: string;
  cep: string;
  state: string;
  complement: string;
  addressNumber: number;
  city: string;
  address: string;
}

const PersonalProviderData = ({
  fullNameLabel,
  onDataValidate,
}: IPersonalProviderData) => {
  const { currentStep, previousStep, nextStep } = useContext(WizardContext);
  const [cep, setCep] = useState("");

  const schema = yup.object({
    fullName: yup.string().required("Obrigatório"),
    document: yup.string().required("Obrigatório"),
    cep: yup.string().required("Obrigatório"),
    address: yup.string().required("Obrigatório"),
    state: yup.string().required("Obrigatorio"),
    complement: yup.string(),
    addressNumber: yup.number().required("Obrigatório"),
    city: yup.string().required("Obrigatório"),
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IPersonalProviderForm>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    onDataValidate?.(data);

    nextStep();
  });

  const watchCep = watch("cep");

  const { data: addressSearchData, isLoading: addressSearchIsLoading } =
    useAddressSearch(cep);

  return (
    <S.Container>
      <S.InputGroupContainer>
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="fullName"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.fullName}
              helperText={errors.fullName?.message ?? ""}
              placeholder={fullNameLabel}
            />
          )}
        />

        <Controller
          control={control}
          name="document"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="document"
              value={cpfCnpjMask(value)}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.document}
              helperText={errors.document?.message ?? ""}
              placeholder="CPF/CNPJ"
            />
          )}
        />
      </S.InputGroupContainer>

      <S.InputGroupContainer>
        <S.CepContainer>
          <Controller
            control={control}
            name="cep"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                name="document"
                value={cepMask(value)}
                onChange={onChange}
                onBlur={onBlur}
                isError={!!errors.cep}
                helperText={errors.cep?.message ?? ""}
                placeholder="00000-000"
                isLoading={true}
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
          name="address"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              name="address"
              value={value || addressSearchData?.logradouro}
              onChange={onChange}
              onBlur={onBlur}
              isError={!!errors.address}
              helperText={errors.address?.message ?? ""}
              placeholder="Endereço"
            />
          )}
        />

        <S.AddressDataContainer>
          <S.UfNumberContainer>
            <Controller
              control={control}
              name="state"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="state"
                  value={value || addressSearchData?.uf}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.state}
                  helperText={errors.state?.message ?? ""}
                  placeholder="UF"
                />
              )}
            />

            <Controller
              control={control}
              name="addressNumber"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="addressNumber"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.addressNumber}
                  helperText={errors.addressNumber?.message ?? ""}
                  placeholder="N°"
                />
              )}
            />
          </S.UfNumberContainer>

          <S.CityComplementContainer>
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="city"
                  value={value || addressSearchData?.localidade}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.city}
                  helperText={errors.city?.message ?? ""}
                  placeholder="Cidade"
                />
              )}
            />

            <Controller
              control={control}
              name="complement"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  name="complement"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={!!errors.complement}
                  helperText={errors.complement?.message ?? ""}
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

export default PersonalProviderData;
