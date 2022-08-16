import { USER_INFO } from '../constants/localStorage';
import { IUserInfo } from '../types/auth';

export const setUserInfo = (userInfo: IUserInfo) => {
  const userInfoString = JSON.stringify(userInfo);
  localStorage.setItem(USER_INFO, userInfoString);
};

export const getUserInfo = (): IUserInfo | undefined => {
  const userInfoString = localStorage.getItem(USER_INFO);
  if (!userInfoString) return undefined;
  return JSON.parse(userInfoString);
};

export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};
