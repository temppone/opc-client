/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { api } from "../..";
import { IFinalData } from "../../../@types/wizard";

interface IRequestStatus {
  onSuccess?:
    | ((
        data: any,
        variables: IFinalData,
        context: unknown
      ) => void | Promise<unknown>)
    | undefined;
  onError?:
    | ((
        err: any,
        variables: IFinalData,
        context: unknown
      ) => void | Promise<unknown>)
    | undefined;
}

export const useGenerateContract = ({ onError, onSuccess }: IRequestStatus) => {
  return useMutation(
    async ({
      type,
      personalCustomerData,
      personalProviderData,
      observation,
      projectDuration,
      projectValue,
    }: IFinalData) => {
      const { data } = await api.post(
        "/contracts/generate",
        {
          type,
          personalCustomerData,
          personalProviderData,
          observation,
          projectDuration,
          projectValue,
        },
        {
          responseType: "blob",
        }
      );

      return data;
    },

    {
      onSuccess,
      onError,
    }
  );
};
