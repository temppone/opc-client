import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import { GlobalStyles } from "./styles/global";
import { mainTheme } from "./styles/theme";
import { ChevronRight } from "@styled-icons/fa-solid/ChevronRight";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Button
          onClick={() => console.log("teste")}
          children="Avançar"
          color="yellow"
        />

        <Button
          onClick={() => console.log("teste")}
          color="darkYellow"
          icon={<ChevronRight size={20} />}
        />

        <Button
          onClick={() => console.log("teste")}
          color="darkYellow"
          children="COMEÇAR!"
          arrow
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
