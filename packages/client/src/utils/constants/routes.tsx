export enum ROUTES {
  //routes react-router
  LOGIN_PAGE = '/login',
  ORDERS = '/orders',
  ABOUT = '/about',
  HOME_PAGE = '/',
  PAGE_NOT_FOUND = '*',
  //api endpoint server
  LOGIN_API = '/api/v1/auth/login',
  SIGNUP = '/api/v1/auth/signup',
  CHECK_AUTH_USER = '/api/v1/auth/check-auth',
  CHECK_TOKEN_EXPIRED_API = '/api/v1/auth/check-token-expired',
  PRODUCTS_API = '/api/v1/products',
  ORDERS_API = '/api/v1/orders/',
  AUTHORIZATION_API = '/api/v1/auth',
  PAGINATION_API = '/api/v1/products/get-products-count',
  LOGOUT_API = '/api/v1/auth/logout',
}
