import apiClient from '../api/apiClient';
import { AUTHORIZTION } from '../constants/api';
import { removeUserInfo } from './userInfo';

export function setLogout() {
  removeUserInfo();
  delete apiClient.defaults.headers.common[AUTHORIZTION];
}
