import { AnyAction } from "redux";
import { questions } from "../../data/questions";

interface IWizard {
  actualQuestion: number;
  questionLength: number;
}

const QUESTIONS_LENGTH = "wizard/QUESTIONS_LENGTH";
const NEXT_QUESTION = "wizard/NEXT_QUESTION";
const PREVIOUS_QUESTION = "wizard/PREVIOUS_QUESTION";

const initialState: IWizard = {
  actualQuestion: 0,
  questionLength: questions.length - 1,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        actualQuestion:
          state.actualQuestion === state.questionLength
            ? state.actualQuestion
            : state.actualQuestion + 1,
      };

    case PREVIOUS_QUESTION:
      return {
        ...state,
        actualQuestion:
          state.actualQuestion === 0
            ? state.actualQuestion
            : state.actualQuestion - 1,
      };

    case QUESTIONS_LENGTH:
      return { ...state, questionLength: action.value };

    default: {
      return state;
    }
  }
};

export const setNextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};

export const setPreviousQuestion = () => {
  return {
    type: PREVIOUS_QUESTION,
  };
};

export const setQuestionLength = (value: number) => {
  return {
    type: QUESTIONS_LENGTH,
    value,
  };
};

export default reducer;
