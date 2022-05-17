import React, { ChangeEvent, ReactNode, useState } from "react";
import * as S from "./styles";

export type InputProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  labelFor,
  initialValue,
  onInput,
  icon,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    !!onInput && onInput(newValue);
  };

  return (
    <S.Container>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputContainer>
        <S.Input type="text" onChange={onChange} value={value} {...props} />
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.InputContainer>
    </S.Container>
  );
};

export default Input;
