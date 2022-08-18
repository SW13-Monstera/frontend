import { getUserInfo } from './../../../utils/userInfo';
import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IProblemRequestParam } from '../../../types/api/problem';
import { BEARER_TOKEN } from '../../../constants/api';
import { AxiosRequestConfig } from 'axios';

export const problemApiWrapper = {
  problemList: (params: IProblemRequestParam) => {
    const config: AxiosRequestConfig<any> = {
      params: params,
    };
    if (params.isSolved) {
      const userInfo = getUserInfo();
      if (!userInfo) throw new Error('userinfo not found');
      config.headers = { Authorization: BEARER_TOKEN(userInfo.accessToken) };
    }
    return apiClient.get(API_URL.PROBLEM_LIST, config).then(
      (res) => res.data,
      (err) => {},
    );
  },
  problemDetail: (problem_id: string) => {
    return apiClient.get(API_URL_WITH_PARAMS.PROBLEM_DETAIL(problem_id));
  },
};
