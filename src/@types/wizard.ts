import { IPersonalCustomerForm } from "../components/PersonalCustomerData";
import { IPersonalProviderForm } from "../components/PersonalProviderData";

export interface IFinalData {
  type?: string;
  personalCustomerData?: IPersonalCustomerForm;
  personalProviderData?: IPersonalProviderForm;
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
