import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import Question from "../../components/Question";
import { WizardContext } from "../../contexts/WizardContext";
import { formData, validationSchema } from "../../utils/createYupValidation";
import * as S from "./styles";

const Wizard = () => {
  const [finalData, setFinalData] = useState({});
  const { currentStep } = useContext(WizardContext);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  const step =
    currentStep === formData.length - 1 ? formData.length - 1 : currentStep;

  const { id, label, type } = formData[step];

  useEffect(() => {
    console.log({ step });
    console.log(formData.length - 1);
  }, [step]);

  return (
    <S.Container>
      <Question
        question={label}
        key={id}
        submit={onSubmit}
        questionsLength={formData.length}
      >
        {type === "text" ? (
          <Controller
            name={id}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={label}
                value={value}
                placeholder={label}
                onChange={onChange}
                disabled={value === ""}
              />
            )}
          />
        ) : null}
      </Question>
    </S.Container>
  );
};

export default Wizard;
