import apiClient from '../api/apiClient';
import { AUTHORIZTION } from 'auth/constants';
import { removeUserInfo } from 'auth/utils/userInfo';

export function setLogout() {
  removeUserInfo();
  delete apiClient.defaults.headers.common[AUTHORIZTION];
  location.reload();
}
