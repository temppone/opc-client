import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input";
import * as S from "./styles";

type Option = {
  label: string;
  value: string;
};

type AutoCompleteProps = {
  placeholder?: string;
  optionsArray: Option[];
  isSearch?: boolean;
};

const AutoComplete = ({
  optionsArray,
  placeholder,
  isSearch = false,
}: AutoCompleteProps) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setOptions(optionsArray);
  }, [optionsArray]);

  const setResultsSearch = (results: string) => {
    setSearch(results);
    setDisplay(false);
  };

  return (
    <S.Container>
      {isSearch ? (
        <Input
          placeholder={placeholder}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setDisplay(true);
            setSearch(event.currentTarget.value);
          }}
          value={search}
        />
      ) : (
        <S.Select onClick={() => setDisplay(true)}>Select</S.Select>
      )}

      {display && (
        <S.List>
          {options
            .filter(
              ({ label }) => label.indexOf(search.toLocaleLowerCase()) > -1
            )
            .map((item: Option) => {
              return (
                <S.Item
                  onClick={() => setResultsSearch(item.label)}
                  key={item.label}
                >
                  {item.label}
                </S.Item>
              );
            })}
        </S.List>
      )}
    </S.Container>
  );
};

export default AutoComplete;
