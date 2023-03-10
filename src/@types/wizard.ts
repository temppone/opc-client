import { IPersonalCustomerForm } from "../components/PersonalCustomerData";
import { IPersonalProviderForm } from "../components/PersonalProviderData";

export interface IFinalData {
  type?: string;
  personalCustomerData?: IPersonalCustomerForm;
  personalProviderData?: IPersonalProviderForm;
  durationTime?: string;
}

export interface IContractFormResponse {
  contractFormType: ContractType;
}

export interface ContractType {
  id: string;
  session_id: string;
  type: string;
  inputs: Input[];
  label: string;
}

export interface Input {
  id: string;
  required: boolean;
  type: string;
  question_label: string;
  position: number;
}
