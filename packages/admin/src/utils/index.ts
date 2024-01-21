import apiClient from '../api/apiClient';
import { AUTHORIZATION, BEARER_TOKEN, USER_INFO } from 'auth/constants';

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

export const isNumeric = (value: any) => {
  return !isNaN(Number(value));
};

export function setLogout() {
  localStorage.removeItem(USER_INFO);
  delete apiClient.defaults.headers.common[AUTHORIZATION];
}

export const setTokenHeader = () => {
  try {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      const token: string | null | undefined = userInfo.accessToken;
      if (typeof token === 'string') {
        apiClient.defaults.headers.common[AUTHORIZATION] = BEARER_TOKEN(token);
      }
    }
  } catch (e) {
    throw new Error('cannot set token');
  }
};
