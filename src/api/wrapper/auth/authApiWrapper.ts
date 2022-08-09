import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { USER_INFO } from '../../../constants/localStorage';
import { IJoinRequest, ILoginRequest } from '../../../types/auth';

export const authApiWrapper = {
  login: (data: ILoginRequest) => {
    return apiClient.post(API_URL.LOGIN, data).then((res: { data: { accessToken: string } }) => {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
      return res.data;
    });
  },

  refresh: () => {
    if (!localStorage.getItem(USER_INFO)) return new Error('localstorage.userInfo not found');

    apiClient
      .get(API_URL.REFRESH, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem(USER_INFO)!).accessToken}`,
        },
      })
      .then((response: { data: { accessToken: string } }) => {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        const json = JSON.parse(localStorage.getItem(USER_INFO)!);
        localStorage.setItem(USER_INFO, { ...json, accessToken: response.data.accessToken });
      });
  },

  join: (data: IJoinRequest) => {
    return apiClient.post(API_URL.JOIN, data);
  },
  getUserInfo: () => {
    return apiClient.get(API_URL.USER_INFO);
  },
};
