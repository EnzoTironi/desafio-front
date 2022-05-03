import axios from "axios";

export const BASE_URL = "http://api-desafio-front.dev.qesh.ai";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
});

export default api;
