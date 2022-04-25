import React from "react";
import { ThemeProvider } from "styled-components";
import Carousel from "./components/Carousel";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";
import Header from "./components/Header/index";

function App() {
  return (
    <div style={{ background: "#77C3FD", height: "100vh" }} className="App">
      <ThemeProvider theme={mainTheme}>
        <Header />
        <GlobalStyles />
        <Carousel />
      </ThemeProvider>
    </div>
  );
}

export default App;
