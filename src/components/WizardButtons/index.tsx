import { ChevronRight } from "@styled-icons/fa-solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WizardState } from "../../store";
import Button from "../Button";
import * as S from "./styles";
import { setNextQuestion, setPreviousQuestion } from "../../store/ducks/wizard";

const WizardButtons = () => {
  const dispatch = useDispatch();
  const { actualQuestion } = useSelector((store: WizardState) => store.wizard);

  return (
    <S.Container>
      {actualQuestion !== 0 && (
        <Button backgroundLess onClick={() => dispatch(setPreviousQuestion())}>
          VOLTAR
        </Button>
      )}

      <S.NextButton>
        <Button
          icon={<ChevronRight />}
          onClick={() => dispatch(setNextQuestion())}
        />
      </S.NextButton>
    </S.Container>
  );
};

export default WizardButtons;
