import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IProblemRequestParam } from '../../../types/api/problem';

export const problemApiWrapper = {
  problemList: (params: IProblemRequestParam) => {
    return apiClient.get(API_URL.PROBLEM_LIST, { params: params });
  },
  problemDetail: (problem_id: string) => {
    return apiClient.get(API_URL_WITH_PARAMS.PROBLEM_DETAIL(parseInt(problem_id)));
  },
};
