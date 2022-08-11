import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/index";
import { queryClient } from "./services/queryClient";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
