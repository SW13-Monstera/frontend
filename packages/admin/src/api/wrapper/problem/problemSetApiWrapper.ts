import { API_URL } from '../../../constants/apiUrl';
import {
  IProblemSetCreateRequest,
  TProblemSetListResponse,
} from '../../../types/problem/problemSetApi';
import apiClient from '../../apiClient';

export const problemSetApiWrapper = {
  getProblemSet: async () => {
    const res = await apiClient.get<TProblemSetListResponse>(API_URL.PROBLEM_SET_LIST);
    return res.data;
  },
  createProblemSet: async (data: IProblemSetCreateRequest) => {
    const res = await apiClient.post(API_URL.PROBLEM_SET_LIST_CREATE, data);
    return res.data;
  },
  updateProblemSet: () => {},
};
