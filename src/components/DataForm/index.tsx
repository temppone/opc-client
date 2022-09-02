import { Search } from "@styled-icons/material";
import Input from "../Input";
import * as S from "./styles";

const DataForm = () => {
  return (
    <S.Container>
      <S.Form>
        <div>
          <Input placeholder="Nome completo do cliente" />
          <Input placeholder="CNPJ/CPF" />
        </div>

        <S.AddressContainer>
          <S.CepContainer>
            <Input placeholder="CEP" buttonChild={<Search size={30} />} />
          </S.CepContainer>

          <Input placeholder="Endereço" />

          <S.DoubleInputContainer>
            <S.SmallInput>
              <Input placeholder="UF" />
            </S.SmallInput>

            <Input placeholder="Cidade" />
          </S.DoubleInputContainer>

          <S.DoubleInputContainer>
            <S.SmallInput>
              <Input placeholder="N°" />
            </S.SmallInput>

            <Input placeholder="Complemento" />
          </S.DoubleInputContainer>
        </S.AddressContainer>
      </S.Form>
    </S.Container>
  );
};

export default DataForm;
