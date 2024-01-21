import apiClient from '../api/apiClient';
import { AUTHORIZATION } from 'auth/constants';
import { removeUserInfo } from 'auth/utils/userInfo';

export function setLogout() {
  removeUserInfo();
  delete apiClient.defaults.headers.common[AUTHORIZATION];
  location.reload();
}
