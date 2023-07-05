import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken } from './auth';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

apiClient.interceptors.request.use(
    async (config: any) => {
        const accessToken = await getAccessToken();
        if (!accessToken) {
            // TODO: Handle error
            return config;
        }
        return {
            ...config,
            headers: { ...config.headers, Authorization: accessToken },
        };
    },
    (err: AxiosError) => Promise.reject(err)
);

apiClient.interceptors.response.use(
    (res: AxiosResponse) => res,
    (err: AxiosError) => {
        // Handle if token is not yet expired but invalid
        if (err.response && err.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
);

const httpGet = <T = any>(
    url: string,
    config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> => apiClient.get(url, config);

const httpPost = <T = any, U = any>(
    url: string,
    body: T,
    config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.post(url, body, config);

const httpPut = <T = any, U = any>(
    url: string,
    body: T,
    config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.put(url, body, config);

const httpDelete = <T = any>(
    url: string,
    config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> => apiClient.delete(url, config);

const httpPatch = <T = any, U = any>(
    url: string,
    body: T,
    config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.patch(url, body, config);

export { apiClient, httpDelete, httpGet, httpPatch, httpPost, httpPut };
