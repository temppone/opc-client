import { Toaster } from "react-hot-toast";
import { QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/index";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Toaster />

        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
