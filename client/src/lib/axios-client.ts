import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
});

// if request status is 401, add token to header
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

/**
 * Subset of AxiosRequestConfig
 */
type RequestConfig<TData = unknown> = {
  baseURL?: string;
  url?: string;
  method: "GET" | "PUT" | "PATCH" | "POST" | "DELETE";
  params?: unknown;
  data?: TData;
  responseType?:
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "text"
    | "stream";
  signal?: AbortSignal;
  headers?: AxiosRequestConfig["headers"];
};

/**
 * Subset of AxiosResponse
 */
type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
  headers?: AxiosResponse["headers"];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const axiosClient = async <TData, _TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>
): Promise<ResponseConfig<TData>> => {
  const promise = axiosInstance.request(config).catch((e) => {
    throw e;
  });

  return promise;
};

type ResponseErrorConfig<TData = unknown> = ResponseConfig<TData>;

export {
  axiosClient,
  type RequestConfig,
  type ResponseConfig,
  type ResponseErrorConfig,
};
export default axiosClient;
