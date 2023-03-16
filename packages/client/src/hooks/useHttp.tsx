import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAppAuthenticated, setLoadingApp } from '../store/slices/appSlice';
import axios from 'axios';
import useStorageService from '../services/useStorageService';

const useHttp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const storageService = useStorageService();

  const httpRequest = useCallback(
    async (url, method = 'GET', data = null, headers = {}) => {
      try {
        if (data) {
          data = JSON.stringify(data);
          headers['Content-Type'] = 'application/json';
        }
        const response = await axios({ url, method, data, headers });
        const resData = await response.data;
        return resData;
      } catch (err: any) {
        if (err.response.status === 401) {
          dispatch(setAppAuthenticated(false));
          dispatch(setLoadingApp(false));
          history.push('/login');
        }
        throw err;
      } finally {
        //TODO: set all loaders to false
      }
    },
    [dispatch, history]
  );
  const clearError = useCallback(() => {}, []);

  const fetcher = (url: string, method = 'GET', body?: Record<string, any>) => {
    const bodyJson = body ? { body: JSON.stringify(body) } : {};
    const bodyHeaders = body ? { 'Content-Type': 'application/json' } : { 'Content-Type': '' };
    const token = storageService.getItem('token');

    return fetch(url, {
      method,
      headers: {
        ...bodyHeaders,
        'Access-Control-Allow-Origin': '*',
        ...(token ? { 'authorization-bearer': token } : {}),
      },
      ...bodyJson,
    });
  };
  return { httpRequest, clearError, fetcher };
};
export default useHttp;
