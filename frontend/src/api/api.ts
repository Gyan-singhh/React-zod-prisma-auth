import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API_BASE_URL}/login`, data);
  return res.data;
};
