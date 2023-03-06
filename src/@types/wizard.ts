import { IPersonalDataForm } from "../components/PersonalData";

export interface IFinalData {
  type?: string;
  personalClientData?: IPersonalDataForm;
}

export interface IContractFormResponse {
  contractType: ContractType;
}

export interface ContractType {
  id: string;
  session_id: string;
  type: string;
  inputs: Input[];
  label: string;
}

export interface Input {
  required: boolean;
  type: string;
  questionLabel: string;
}
