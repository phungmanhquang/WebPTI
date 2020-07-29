import axios from 'axios';

export const DataService = axios.create({
  baseURL: 'https://5f1d44a339d95a0016953d70.mockapi.io',
  timeout: 10000,
});

DataService.interceptors.request.use(
  (config) => {
    return config;
  },
);

DataService.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.status),
);
