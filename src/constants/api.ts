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

export const GA_TRACKING_ID = isProduction ? 'G-5YDJ48WT3K' : 'G-SX59LH5T59';
