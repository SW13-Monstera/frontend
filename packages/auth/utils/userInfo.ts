import { USER_INFO } from '../constants';
import { IUserInfo } from '../types';
import { localStorageWithExpiry } from './localstorage';

export const setUserInfo = (userInfo: IUserInfo) => {
  try {
    const userInfoString = JSON.stringify(userInfo);
    localStorageWithExpiry.setItem(USER_INFO, userInfoString);
  } catch {
    throw new Error('invalid json string format');
  }
};

export const getUserInfo = (): IUserInfo | null => {
  const userInfoString = localStorageWithExpiry.getItem(USER_INFO);
  if (!userInfoString) return null;

  try {
    const userInfo = JSON.parse(userInfoString);
    return userInfo;
  } catch {
    throw new Error('invalid json format');
  }
};

export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};

export const isLogin = () => !!getUserInfo()?.id;
