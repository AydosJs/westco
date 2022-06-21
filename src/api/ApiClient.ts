import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';


const clientConfig: AxiosRequestConfig = {
  timeout: 40000
};

const httpAxios: AxiosInstance = axios.create(clientConfig);

export function get<T>(url: string, params?: unknown): Promise<T> {
  return httpAxios.get(url, { params });
}

export function post<T>(url: string, data?: unknown): Promise<T> {
  return httpAxios.post(url, data);
}

export function put<T>(url: string, data?: unknown): Promise<T> {
  return httpAxios.put(url, data);
}


httpAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookies.get("token");
    config.headers = {
      ...config.headers,
    };
    if (token) {
      config.headers["token"] = token;
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    console.error("[axios interceptor][0] err - ", error);
    return Promise.reject(error);
  }
);
