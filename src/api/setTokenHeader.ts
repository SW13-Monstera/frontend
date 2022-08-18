import apiClient from './apiClient';

export const setTokenHeader = () => {
  try {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      const token: string | null | undefined = userInfo.accessToken;
      if (typeof token === 'string') {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
  } catch (e) {
    throw new Error('cannot set token');
  }
};
