import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "./constants";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config = { ...config };
      config.headers = { ...config.headers } || {};
      config.headers.Authorization = `JWT  ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError<any>) => {
    const isTokenMissing = error.response?.data.details === "Token is missing";

    if (isTokenMissing) {
      toast.dismiss();
      toast.clearWaitingQueue();
      toast.warning("로그인을 해주세요.");
    } else {
      toast.dismiss();
      toast.clearWaitingQueue();
      toast.warning(error.response?.data.details);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
