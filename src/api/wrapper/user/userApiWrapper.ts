import { USER_INFO } from './../../../constants/localStorage';
import apiClient from '../../apiClient';
import { API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IUpdateUserRequest } from '../../../types/api/user';

export const userApiWrapper = {
  updateUser: (data: IUpdateUserRequest) => {
    const json = JSON.parse(localStorage.getItem(USER_INFO)!);
    apiClient
      .put(API_URL_WITH_PARAMS.UPDATE_USER(json.id), data, {
        headers: { Authorization: `Bearer ${json.accessToken}` },
      })
      .then((res) => {
        localStorage.setItem(
          USER_INFO,
          JSON.stringify({ ...res.data, accessToken: json.accessToken }),
        );
      });
  },
};
