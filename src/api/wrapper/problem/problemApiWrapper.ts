import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { IProblemRequestParam } from '../../../types/api/problem';

export const problemApiWrapper = {
  problemList: (params: IProblemRequestParam) => {
    return apiClient.get(API_URL.PROBLEM_LIST, { params: params });
  },
};
