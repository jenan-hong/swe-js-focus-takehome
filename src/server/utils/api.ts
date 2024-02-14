import axios, { AxiosInstance } from 'axios';
import { env } from '../../env';

/**
 * @param baseURL
 * @returns {AxiosInstance}
 */
const createApi = (baseURL: string = env.API_URL): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(request => {
    return request;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.error('Error:', error.response);
      throw error;
    }
  );

  return instance;
};

export default createApi;
