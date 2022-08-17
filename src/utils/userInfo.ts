import { USER_INFO } from '../constants/localStorage';
import { IUserInfo } from '../types/auth';

export const setUserInfo = (userInfo: IUserInfo) => {
  try {
    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem(USER_INFO, userInfoString);
  } catch {
    throw new Error('invalid json string format');
  }
};

export const getUserInfo = (): IUserInfo => {
  const userInfoString = localStorage.getItem(USER_INFO);
  if (!userInfoString) throw new Error('userinfo not found');

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
