import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ducks";

export const store = configureStore({
  reducer,
});

export type WizardState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
