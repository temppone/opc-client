import React, { useState, useContext } from "react";
import Question from "../../components/Question";
import Radio from "./../../components/Radio/index";
import Select from "./../../components/Select/index";
import { questions } from "./../../data/questions";
import * as S from "./styles";
import CalendarPicker from "./../../components/DatePicker/index";
import { WizardContext } from "../../context/WizardContex";

const Wizard = () => {
  const [disabled, setDisabled] = useState(true);
  const [finalData, setFinalData] = useState({});

  const { currentStep } = useContext(WizardContext);

  const handleChangeFinalData = (value: string, name: string) => {
    setFinalData({ ...finalData, [name]: value });
    setDisabled(false);
  };

  return (
    <S.Container>
      <Question disabled={disabled} question={questions[currentStep].question}>
        {questions[currentStep].type === "radio" &&
          questions[currentStep].answers?.map((answer) => (
            <Radio
              key={answer.id}
              label={answer.label}
              labelFor={answer.label}
              value={answer.value}
              onCheck={() => {
                setDisabled(false);
                handleChangeFinalData(
                  answer.value,
                  questions[currentStep].question
                );
              }}
            />
          ))}

        {questions[currentStep].type === "select" && (
          <Select
            label="Área de atuação"
            placeholder="Selecione sua área de atuação"
            items={questions[currentStep].answers || []}
            onChange={(value) => {
              value === "" ? setDisabled(true) : setDisabled(false);
            }}
          />
        )}

        {questions[currentStep].type === "date" && <CalendarPicker />}
      </Question>
    </S.Container>
  );
};

export default Wizard;
