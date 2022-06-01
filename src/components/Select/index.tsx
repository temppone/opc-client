import { ChevronDown } from "@styled-icons/fa-solid";
import React, { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOutsideClick";
import * as S from "./styles";

export interface Item {
  id: number;
  label: string;
  value: string;
}

export interface ISelect {
  label?: string;
  placeholder?: string;
  defaultSelected?: string;
  items: Item[];
  multiple?: boolean;
  showOptions?: boolean;
  onChange: (value: string) => void;
}

const Select = ({ placeholder, defaultSelected, items, onChange }: ISelect) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);
  const ref = useRef(null);

  const handleContainerClick = () => {
    setShowOptions(!showOptions);
  };

  const handleSelected = (value: string) => {
    setSelected(value);
    setShowOptions(false);
    return selected;
  };

  const handleClickOutside = () => {
    setShowOptions(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    onChange(selected || "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <S.Container ref={ref} onClick={handleContainerClick}>
      {placeholder && !selected ? (
        <S.Placeholder>{placeholder}</S.Placeholder>
      ) : (
        <S.Selected>{selected}</S.Selected>
      )}
      <S.Select id="select-dropdown" showOptions={showOptions}>
        {items.map((item) => (
          <S.Option key={item.value} onClick={() => handleSelected(item.label)}>
            {item.label}
          </S.Option>
        ))}
      </S.Select>
      <S.Icon showOptions={showOptions}>
        <ChevronDown size={12} />
      </S.Icon>
    </S.Container>
  );
};

export default Select;
