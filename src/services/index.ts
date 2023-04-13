/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const baseURL = process.env.REACT_APP_API_BASEURL;

export const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    if (error.response?.status === 401) {
      toast.error("Algo deu errado");
    }

    return Promise.reject(error);
  }
);
