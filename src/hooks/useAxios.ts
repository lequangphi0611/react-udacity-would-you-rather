import axios, { AxiosInstance } from 'axios';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { authenticateSelectors } from '../state/selectors';
import { toast } from 'react-toastify';
import { cloneDeep } from 'lodash';

const useAxios = () => {
  const token = useSelector(authenticateSelectors.selectToken);

  const [axioValue, setAxiosValue] = useState(() => {
    const client = axios.create({
      baseURL: '/api',
    });

    client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const { response } = error;
        toast.error(response.data.message);
        return Promise.reject(error);
      }
    );

    return client;
  });

  const keyRef = useRef<number | null>(null);
  useEffect(() => {
    setAxiosValue((axios: AxiosInstance) => {
      if (keyRef.current !== null) {
        axios.interceptors.request.eject(keyRef.current);
        keyRef.current = null;
      }

      if (token) {
        keyRef.current = axios.interceptors.request.use((config) => {
          const clonedConfig = cloneDeep(config);
          if (clonedConfig.headers) {
            clonedConfig.headers['Authorization'] = token;
          }
          return { ...clonedConfig };
        });
      }

      return axios;
    });
  }, [token]);

  return axioValue;
};

export default useAxios;
