import { useState } from "react";
import { useSelector } from "react-redux";
import Question from "../../components/Question";
import { WizardState } from "../../store";
import Radio from "./../../components/Radio/index";
import Select from "./../../components/Select/index";
import { questions } from "./questions";
import * as S from "./styles";
import CalendarPicker from "./../../components/DatePicker/index";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createYupSchema, formData } from "../../utils/createYupValidation";

const Wizard = () => {
  const { actualQuestion } = useSelector((store: WizardState) => store.wizard);
  const [disabled, setDisabled] = useState(true);
  const [finalData, setFinalData] = useState({});

  const handleChangeFinalData = (value: string, name: string) => {
    setFinalData({ ...finalData, [name]: value });
    setDisabled(false);
  };

  createYupSchema({}, formData);

  // type WizardFinalData = yup.InferType<typeof schema>;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <S.Container>
      <Question
        disabled={disabled}
        question={questions[actualQuestion].question}
      >
        {questions[actualQuestion].type === "radio"
          ? questions[actualQuestion].answers?.map((answer) => (
              <Controller
                key={answer.id}
                control={control}
                name="actuationArea"
                render={({ field: { onChange, onBlur } }) => (
                  <Radio
                    label={answer.label}
                    labelFor={answer.label}
                    value={answer.value}
                    onCheck={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            ))
          : null}

        {questions[actualQuestion].type === "select" ? (
          <Controller
            control={control}
            name="anyQuestion"
            render={({ field: { onChange, value } }) => (
              <Select
                label="Área de atuação"
                placeholder="Selecione sua área de atuação"
                items={questions[actualQuestion].answers || []}
                onChange={(_e: any, data: { id: any }) => onChange(data?.id)}
                value={value}
              />
            )}
          />
        ) : null}

        {questions[actualQuestion].type === "date" ? <CalendarPicker /> : null}
      </Question>
    </S.Container>
  );
};

export default Wizard;
