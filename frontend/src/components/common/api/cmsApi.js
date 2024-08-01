import axios from 'axios';
import { getEnvVariables } from './cmsApi';

const { VITE_API_URL } = getEnvVariables();

const cmsApi = axios.create({
  baseURL: VITE_API_URL,
});

cmsApi.interceptors.request.use((config) => {
  let tokenString = '';

  const token = JSON.parse(localStorage.getItem('cms'));

  if (token) {
    tokenString = token;
  }

  config.headers = {
    ...config.headers,
    Authorization: 'Bearer ' + tokenString,
  };

  return config;
});

export default cmsApi;
