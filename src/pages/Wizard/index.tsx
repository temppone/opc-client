import React from "react";
import { useSelector } from "react-redux";
import WizardQuestion from "../../components/WizardQuestion";
import { WizardState } from "../../store";
import Radio from "./../../components/Radio/index";
import Select from "./../../components/Select/index";
import { questions } from "./../../data/questions";
import * as S from "./styles";

const Wizard = () => {
  const { actualQuestion } = useSelector((store: WizardState) => store.wizard);

  return (
    <S.Container>
      <WizardQuestion question={questions[actualQuestion].question}>
        {questions[actualQuestion].type === "radio" &&
          questions[actualQuestion].answers.map((answer) => (
            <Radio
              key={answer.id}
              label={answer.label}
              labelFor={answer.label}
              value={answer.value}
              onCheck={() => {
                console.log(answer.value);
              }}
            />
          ))}

        {questions[actualQuestion].type === "select" && (
          <Select
            label="Área de atuação"
            placeholder="Selecione sua área de atuação"
            defaultSelected="Selecione sua área de atuação"
            items={questions[actualQuestion].answers || []}
          />
        )}
      </WizardQuestion>
    </S.Container>
  );
};

export default Wizard;
