import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';


const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://10.10.126.2:8080/', 
  timeout: 60000, 
  headers: {
    'Content-Type': 'application/json'
  },
};

const apiInstance: AxiosInstance = axios.create(axiosConfig);

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
