import { ThemeProvider } from "styled-components";
import { WizardProvider } from "./contexts/WizardContext";
import { AppRoutes } from "./routes/index";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <WizardProvider>
          <GlobalStyles />
          <AppRoutes />
        </WizardProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
