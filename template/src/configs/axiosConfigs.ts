import axios, { type AxiosInstance } from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export default axiosInstance;
