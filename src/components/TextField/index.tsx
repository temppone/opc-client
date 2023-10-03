import React, { ChangeEvent, ReactNode, useState } from "react";
import * as S from "./styles";

export type IInput = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: ReactNode;
  buttonChild?: ReactNode | string;
  onClickButton?: () => void;
  isError?: boolean;
  helperText?: string;
  isLoading?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor,
  initialValue,
  onInput,
  icon,
  buttonChild,
  onClickButton,
  isError,
  isLoading,
  helperText,
  ...props
}: IInput) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper>
      <S.Container>
        {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
        <S.InputContainer isError={isError} buttonChild={buttonChild}>
          <S.Input type="text" onChange={onChange} value={value} {...props} />
          {!!icon && <S.Icon>{icon}</S.Icon>}
        </S.InputContainer>
        {!!buttonChild && (
          <S.Button onClick={onClickButton} disabled={isLoading}>
            {buttonChild}
          </S.Button>
        )}
      </S.Container>
      <S.HelperText>{helperText}</S.HelperText>
    </S.Wrapper>
  );
};

export default TextField;
