import { useQuery } from "react-query";
import { api } from "..";
import { GET_CONTRACTS_TYPES } from "../queryKeys";

export interface IResponse {
  contractsTypes: { type: string }[];
}

export const getContractTypes = async (): Promise<IResponse> => {
  const { data } = await api.get("/contracts/types/");

  return data;
};

export const useContractTypes = () => {
  return useQuery<IResponse | null>([GET_CONTRACTS_TYPES], () =>
    getContractTypes()
  );
};
