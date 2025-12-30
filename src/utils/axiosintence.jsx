import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || "http://localhost:5000" ,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
