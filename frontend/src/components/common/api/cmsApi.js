import axios from 'axios';

const cmsApi = axios.create({
  baseURL: 'http://localhost:4000/api',
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
