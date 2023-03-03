//viacep.com.br/ws

import axios from "axios";
import { useQuery } from "react-query";
import { IAddressResponse } from "../../../@types/address";
import { GET_ADDRESS } from "../../queryKeys";

export const getAddress = async (
  cep: string | undefined
): Promise<IAddressResponse> => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

  return data;
};

export const useAddressSearch = (cep: string | undefined) => {
  return useQuery<IAddressResponse | null>(
    [GET_ADDRESS],
    () => getAddress(cep),
    { enabled: !!cep }
  );
};
