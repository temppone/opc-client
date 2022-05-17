import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

export interface Item {
  id: number;
  label: string;
  value: string;
}

export type CheckboxProps = {
  items: Item[];
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ items }: CheckboxProps) => {
  return (
    <>
      {items.map((item) => {
        return (
          <S.Container key={item.id}>
            <S.Input id={item.value} type="checkbox" />
            {!!item.label && (
              <S.Label htmlFor={item.value}>{item.label}</S.Label>
            )}
          </S.Container>
        );
      })}
    </>
  );
};

export default Checkbox;
