//viacep.com.br/ws

import axios from "axios";
import { useQuery } from "react-query";
import { IAddressResponse } from "../../../@types/address";
import { GET_ADDRESS } from "../../queryKeys";

export const getAddress = async (
  cep: number | undefined
): Promise<IAddressResponse> => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

  return data;
};

export const useAddressSearch = (cep: number | undefined) => {
  return useQuery<IAddressResponse | null>(
    [GET_ADDRESS, cep],
    () => getAddress(cep),
    { enabled: !!cep }
  );
};
