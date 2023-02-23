import br from "date-fns/locale/pt-BR";
import { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import Question from "../../components/Question";
import { WizardContext } from "../../context/WizardContex";
import Radio from "./../../components/Radio/index";
import Select from "./../../components/Select/index";
import { questions } from "./../../data/questions";
import * as S from "./styles";

import { CalendarAlt } from "@styled-icons/fa-solid";
import DatePicker, { registerLocale } from "react-datepicker";
import CalendarPicker from "../../components/DatePicker";

registerLocale("br", br);

const Wizard = () => {
  const [disabled, setDisabled] = useState(true);
  const [finalData, setFinalData] = useState({});

  const { currentStep } = useContext(WizardContext);

  const handleChangeFinalData = (value: string, name: string) => {
    setFinalData({ ...finalData, [name]: value });
    setDisabled(false);
  };

  const currentQuestion = questions[currentStep];

  useEffect(() => {
    console.log({ finalData });
  }, [finalData]);

  return (
    <S.Container>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            disabled={disabled}
            question={currentQuestion.question}
          >
            {currentQuestion.type === "radio" &&
              currentQuestion.answers?.map((answer) => (
                <Radio
                  key={answer.id}
                  label={answer.label}
                  labelFor={answer.label}
                  value={answer.value}
                  onCheck={() => {
                    setDisabled(false);
                    handleChangeFinalData(answer.value, currentQuestion.name);
                  }}
                />
              ))}
            {currentQuestion.type === "select" && (
              <Select
                id={currentQuestion.placeholder || ""}
                placeholder={currentQuestion.placeholder}
                items={currentQuestion.answers || []}
                onChange={(value) => {
                  value === "" ? setDisabled(true) : setDisabled(false);
                  handleChangeFinalData(value, currentQuestion.name);
                }}
              />
            )}

            {currentQuestion.type === "date" && (
              <CalendarPicker
                // Precisa tipar o onchange do componente CalendarPicker
                onChange={(value: any) => {
                  value === "" ? setDisabled(true) : setDisabled(false);
                  handleChangeFinalData(value.toString(), currentQuestion.name);
                }}
              />
            )}
            {currentQuestion.type === "textField" && (
              <Input
                placeholder={currentQuestion.placeholder}
                onChange={(value) => {
                  value.target.value === ""
                    ? setDisabled(true)
                    : setDisabled(false);
                  handleChangeFinalData(value.toString(), currentQuestion.name);
                }}
              />
            )}
          </Question>
        );
      })}
    </S.Container>
  );
};

export default Wizard;
