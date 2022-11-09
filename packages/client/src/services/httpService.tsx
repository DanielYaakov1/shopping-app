import useHttp from '../hooks/useHttp';
import { setAppAuthenticated } from '../store/slices/appSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../utils/constants/index';

const HttpService = () => {
  const { httpRequest } = useHttp();
  const dispatch = useDispatch();
  const history = useHistory();

  const requestProtectedRoute = async (url: string) => {
    try {
      const resCheckTokenIsExpired = await fetch(ROUTES.CHECK_TOKEN_EXPIRED_API);
      if (resCheckTokenIsExpired.status !== 200) {
        dispatch(setAppAuthenticated(resCheckTokenIsExpired.ok));
        return history.replace(ROUTES.LOGIN_PAGE);
      }
      const resData = await httpRequest(url);
      return resData;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return { requestProtectedRoute };
};
export default HttpService;
