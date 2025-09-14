// axios.js
import axios from "axios";

// Vite exposes env vars like import.meta.env
const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
