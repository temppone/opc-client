import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
