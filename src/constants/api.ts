import { isProduction } from '../utils/isProduction';

export const AUTHORIZTION = 'Authorization';
export const BEARER_TOKEN = (token: string) => `Bearer ${token}`;
export const ROLES = {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_USER: 'ROLE_USER',
};

export const API_BASE_URL = isProduction
  ? 'https://api.csbroker.io'
  : 'https://dev.api.csbroker.io';

export const APP_URL = isProduction ? 'https://csbroker.io' : 'https://dev.csbroker.io';

export const GA_TRACKING_ID =
  window.location.href.includes('dev') || window.location.href.includes('localhost')
    ? 'UA-180471924-3'
    : 'UA-180471924-2';
