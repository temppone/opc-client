import { createContext, ReactNode, useState } from "react";

interface IWizard {
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

type WizardProviderChildren = {
  children: ReactNode;
};

export const WizardContext = createContext({} as IWizard);

export const WizardProvider = ({ children }: WizardProviderChildren) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        previousStep,
        nextStep,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};
