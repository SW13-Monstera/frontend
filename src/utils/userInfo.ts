import { USER_INFO } from '../constants/localStorage';
import { IUserInfo } from '../types/auth';

export const setUserInfo = (json: IUserInfo) => {
  const userInfoString = JSON.stringify(json);
  localStorage.setItem(USER_INFO, userInfoString);
};

export const getUserInfo = (): IUserInfo | undefined => {
  const userInfo = localStorage.getItem(USER_INFO);
  if (!userInfo) return undefined;
  return JSON.parse(userInfo);
};

export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};
