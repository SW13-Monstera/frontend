import { IUserListRequestParams, IUserListResponseData, INotice } from './../../../types/user/api';
import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';

export const userApiWrapper = {
  userList: (params?: IUserListRequestParams) => {
    return apiClient
      .get(API_URL.USER_LIST, { params: params })
      .then((res: { data: IUserListResponseData[] }) => res.data);
  },
  createNotice: (notice: INotice) => {
    return apiClient.post(API_URL.NOTICE, notice).then((res) => res.data);
  },
  createNotices: (notices: INotice[]) => {
    return apiClient.post(API_URL.NOTICES, notices).then((res) => res.data);
  },
};
