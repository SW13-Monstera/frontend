import { API_URL } from '../../../constants/apiUrl';
import { IProblemSearchParam, ISearchProblem } from '../../../types/problem/api';
import apiClient from '../../apiClient';

export const problemApiWrapper = {
  searchProblem: async (params: IProblemSearchParam) => {
    const res = await apiClient.get<ISearchProblem>(API_URL.PROBLEM_SEARCH, {
      params: { ...params, tags: params.tags.join(',') },
    });
    return res.data;
  },
};
