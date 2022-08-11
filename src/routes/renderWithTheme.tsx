import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/theme";

export const renderWithTheme = (Children: ReactElement) => {
  const { container } = render(
    <ThemeProvider theme={mainTheme}>{Children}</ThemeProvider>
  );
  return container;
};
