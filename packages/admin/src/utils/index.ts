import { USER_INFO } from '../constants/localStorage';
import { IParsedToken, IUserInfo } from '../types/auth';
import apiClient from '../api/apiClient';
import { AUTHORIZTION, BEARER_TOKEN } from '../constants';

export const roundToSecondDigit = (num: number) => Math.round(num * 100) / 100;

export const parseDateTime = (str: string) => {
  const dateString = Date.parse(str);
  if (!isNaN(dateString)) {
    const newDate = new Date(dateString);
    return `${newDate.getFullYear()}년 ${newDate.getMonth()}월 ${newDate.getDate()}일 ${newDate.getHours()}시 ${newDate.getMinutes()}분`;
  } else {
    return str;
  }
};

export const setUserInfo = (userInfo: IUserInfo) => {
  try {
    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem(USER_INFO, userInfoString);
  } catch {
    throw new Error('invalid json string format');
  }
};

export const getUserInfo = (): IUserInfo | null => {
  const userInfoString = localStorage.getItem(USER_INFO);
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

export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
  return JSON.parse(jsonPayload) as IParsedToken;
};

export const isNumeric = (value: any) => {
  return !isNaN(Number(value));
};

export function setLogout() {
  localStorage.removeItem(USER_INFO);
  delete apiClient.defaults.headers.common[AUTHORIZTION];
}

export const setTokenHeader = () => {
  try {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      const token: string | null | undefined = userInfo.accessToken;
      if (typeof token === 'string') {
        apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(token);
      }
    }
  } catch (e) {
    throw new Error('cannot set token');
  }
};
