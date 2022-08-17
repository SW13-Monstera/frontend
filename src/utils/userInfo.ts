import { USER_INFO } from '../constants/localStorage';
import { IUserInfo } from '../types/auth';

export const isValidJSONString = (str: object) => {
  try {
    JSON.stringify(str);
    return true;
  } catch {
    return false;
  }
};

export const isValidJSON = (text: string) => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

export const setUserInfo = (userInfo: IUserInfo) => {
  if (isValidJSONString(userInfo)) {
    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem(USER_INFO, userInfoString);
  } else {
    throw new Error('invalid json string format');
  }
};

export const getUserInfo = (): IUserInfo => {
  const userInfoString = localStorage.getItem(USER_INFO);
  if (!userInfoString) throw new Error('userinfo not found');

  if (isValidJSON(userInfoString)) {
    const userInfo = JSON.parse(userInfoString);
    return userInfo;
  } else {
    throw new Error('invalid json format');
  }
};

export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};
