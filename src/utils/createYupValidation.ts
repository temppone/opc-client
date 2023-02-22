/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";

type ConfigSchema = {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
  validationType: ValidationType;
  required?: boolean;
  value: string;
  validations: Validations[];
};

type ValidationType =
  | "stringYup"
  | "numberYup"
  | "booleanYup"
  | "dateYup"
  | "arrayYup"
  | "mixedYup"
  | "objectYup";

type Validations = {
  type: string;
  params: Array<string | number>;
};

const yupValidationsType: {
  [key in ValidationType]: any;
} = {
  stringYup: yup.string(),
  numberYup: yup.number(),
  booleanYup: yup.boolean(),
  dateYup: yup.date(),
  arrayYup: yup.array(),
  mixedYup: yup.mixed(),
  objectYup: yup.object(),
};

export const formData: ConfigSchema[] = [
  {
    id: "name",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    validationType: "stringYup",
    value: "User name",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
    validationType: "stringYup",
    value: "email",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "email cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "email cannot be more than 10 characters"],
      },
      {
        type: "email",
        params: ["please enter a valid email"],
      },
    ],
  },
  {
    id: "phoneNumber",
    label: "phone number",
    type: "text",
    validationType: "numberYup",
    value: "7878787878",
    placeholder: "Teste",
    validations: [
      {
        type: "min",
        params: [10, "phone number cannot be less than 10 characters"],
      },
      {
        type: "max",
        params: [10, "phone number cannot be more than 10 characters"],
      },
      {
        type: "required",
        params: ["phone number is required"],
      },
    ],
  },
  {
    id: "total",
    label: "Total People in Family",
    placeholder: "family members count",
    type: "text",
    validationType: "numberYup",
    value: "1",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [1, "there should be atleast 1 family member"],
      },
      {
        type: "max",
        params: [5, "max family members can be 5"],
      },
    ],
  },
];

// export const createYupSchema = (schema: any, config: ConfigSchema[]) => {
//   const [{ id, validationType, validations }] = config;

//   if (!yupValidationsType[validationType]) {
//     return schema;
//   }

//   let yupValidator = yupValidationsType[validationType];

//   validations.forEach((validation) => {
//     const { params, type } = validation;

//     if (!yupValidator[type]) {
//       return;
//     }

//     yupValidator = yupValidator[type](...params);
//   });

//   schema[id] = yupValidator;

//   return schema;
// };

// eslint-disable-next-line @typescript-eslint/ban-types
const schema: yup.ObjectSchema<{}> = yup.object().shape({});

formData.forEach((field: ConfigSchema) => {
  const { id, required, validations, validationType } = field;

  let fieldSchema = yupValidationsType[validationType];

  if (required) {
    fieldSchema = fieldSchema.required(validations[0].params[0]);
  }

  //itera os tipos de validação e adiciona os params
  validations.forEach((validation) => {
    const { type, params } = validation;

    fieldSchema = fieldSchema[type](...params);
  });

  schema.shape({
    [id]: fieldSchema,
  });
});

export const validationSchema = schema;
