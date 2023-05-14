import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.VITE_URL_API,
});
