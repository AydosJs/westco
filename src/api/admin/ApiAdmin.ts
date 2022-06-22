import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const clientConfig: AxiosRequestConfig = {
  timeout: 40000
};

const httpAxios: AxiosInstance = axios.create(clientConfig);

export function getAdmin<T>(url: string, params?: unknown): Promise<T> {
  return httpAxios.get(url, { params });
}

export function postAdmin<T>(url: string, data?: unknown): Promise<T> {
  return httpAxios.post(url, data);
}

export function putAdmin<T>(url: string, data?: unknown): Promise<T> {
  return httpAxios.put(url, data);
}

export function deleteAdmin<T>(url: string): Promise<T> {
  return httpAxios.delete(url);
}


httpAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookies.get("tokenAdmin");
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
