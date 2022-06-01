import React from "react";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/index";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";

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
