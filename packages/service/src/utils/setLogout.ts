import apiClient from '../api/apiClient';
import { AUTHORIZTION } from 'auth/constants';
import { removeUserInfo } from './userInfo';

export function setLogout() {
  removeUserInfo();
  delete apiClient.defaults.headers.common[AUTHORIZTION];
}
