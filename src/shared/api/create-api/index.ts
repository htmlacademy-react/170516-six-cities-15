import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
import { toast } from 'react-toastify';
import {token} from '../../utils/token';
import {browserHistory} from '../../utils/browser-history';
import {Path} from '../../config';

type DetailMessageType = {
  type: string;
  message: string;
};

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (token && config.headers) {
        config.headers['x-token'] = token.get();
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        const detailMessage = (error.response.data);
        toast.warn(detailMessage.message);
        browserHistory.push(Path.NotFound);
      }

      if (error.response?.status === StatusCodes.UNAUTHORIZED) {
        toast.warn('unauthorized!');
      }

      if (error.response?.status === StatusCodes.BAD_REQUEST) {
        const detailMessage = (error.response.data);
        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
