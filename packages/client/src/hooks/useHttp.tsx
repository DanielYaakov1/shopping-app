import { useCallback } from 'react';
import { getStorageApi } from '../services/storageApi';

const useHttp = () => {
  const httpRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }
      const response = await fetch(url, { method, body, headers });
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error.message || 'Something went wrong');
      }
      return resData;
    } catch (err) {
      console.log(err);
      throw new Error(err as string);
    } finally {
      //TODO: set all loaders to false
    }
  }, []);
  const clearError = useCallback(() => {}, []);

  const fetcher = (url: string, method = 'GET', body?: Record<string, any>) => {
    const bodyJson = body ? { body: JSON.stringify(body) } : {};
    const bodyHeaders = body ? { 'Content-Type': 'application/json' } : { 'Content-Type': '' };
    const token = getStorageApi('token');
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
