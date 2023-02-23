import Input from "../Input";
import { Search } from "@styled-icons/fa-solid";
import * as S from "./styles";
import Button from "../Button";

interface IPersonalData {
  title: string;
  fullNameLabel: string;
}

const PersonalData = ({ title, fullNameLabel }: IPersonalData) => {
  return (
    <S.Container>
      <S.InputGroupContainer>
        <Input placeholder={fullNameLabel} />
        <Input placeholder="CPF/CNPJ" />
      </S.InputGroupContainer>

      <Input
        placeholder="CEP"
        buttonChild={
          <Button onClick={() => console.log("search city")}>
            <Search />
          </Button>
        }
      />
    </S.Container>
  );
};

export default PersonalData;
