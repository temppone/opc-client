import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WizardProvider } from "./context/WizardContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WizardProvider>
      <App />
    </WizardProvider>
  </React.StrictMode>
);

reportWebVitals();
