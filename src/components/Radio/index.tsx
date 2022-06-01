import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

type RadioValue = string | ReadonlyArray<string> | number;

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  onCheck: (value: RadioValue) => void;
  label?: string;
  labelFor: string;
  value: RadioValue;
}

const Radio = ({ onCheck, label, labelFor, value }: IRadio) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <S.Container>
      <S.Input
        id={labelFor}
        value={value}
        onChange={onChange}
        type="radio"
        name="radio"
      />
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
    </S.Container>
  );
};

export default Radio;
