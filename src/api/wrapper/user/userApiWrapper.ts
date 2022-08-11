import { USER_INFO } from './../../../constants/localStorage';
import apiClient from '../../apiClient';
import { API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IUpdateUserRequest } from '../../../types/api/user';

export const userApiWrapper = {
  updateUser: (data: IUpdateUserRequest) => {
    const json = JSON.parse(localStorage.getItem(USER_INFO)!);
    apiClient.patch(API_URL_WITH_PARAMS.UPDATE_USER(json.id), data, {
      headers: { Authorization: `Bearer ${json.accessToken}` },
    });
  },
};
