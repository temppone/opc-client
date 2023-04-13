import { useQuery } from "react-query";
import { api } from "../..";
import { IContractFormResponse } from "../../../@types/wizard";
import { GET_CONTRACT_FORM } from "../../queryKeys";

export const getContractForm = async (
  type: string | undefined
): Promise<IContractFormResponse> => {
  const { data } = await api.get(`/contracts/form/${type}`);

  return data;
};

export const useContractForm = (type: string | undefined) => {
  return useQuery<IContractFormResponse | null>(
    [GET_CONTRACT_FORM],
    () => getContractForm(type),
    { enabled: !!type }
  );
};
