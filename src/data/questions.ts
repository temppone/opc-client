export const questions = [
  {
    id: 3,
    question:
      "Alguma pergunta mirabolante e show de bola aqui mais palavras pra ficar top?",
    type: "select",
    placeholder: "Selecione",
    name: "actuationArea",
    answers: [
      {
        id: 1,
        label: "Ciência da Computação",
        value: "ciencia-da-computacao",
      },
      {
        id: 2,
        label: "Engenharia da Computação",
        value: "engenharia-da-computacao",
      },
      {
        id: 3,
        label: "Engenharia Elétrica",
        value: "engenharia-eletrica",
      },
    ],
  },

  {
    id: 5,
    name: "radioQuestion",
    question: "Sunt mollit dolore anim ut incididunt eu?",
    type: "radio",
    answers: [
      {
        id: 1,
        label: "Teste 1",
        value: "teste-1",
      },
      {
        id: 2,
        label: "Teste 2",
        value: "teste-2",
      },
      {
        id: 3,
        label: "Teste 3",
        value: "teste-3",
      },
      {
        id: 4,
        label: "Teste 4",
        value: "teste-4",
      },
    ],
  },

  {
    id: 6,
    name: "projectDueDate",
    question: "Qual o prazo de finalização do projeto?",
    type: "date",
  },

  {
    id: 7,
    name: "note",
    question: "Qual a informação importante?",
    type: "textField",
    placeholder: "Digite...",
  },
];
