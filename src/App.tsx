import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";
import { AppRoutes } from "./routes/index";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
