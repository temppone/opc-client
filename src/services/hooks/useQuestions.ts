import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { GET_QUESTIONS } from "./querytKeys";

interface Question {
  title: string;
  price: number;
  description: string;
}

export const getQuestions = async (): Promise<Question[]> => {
  const response = await api.get("products");

  return response.data;
};

export const useQuestions = () => {
  return useQuery<Question[]>([GET_QUESTIONS], getQuestions);
};
