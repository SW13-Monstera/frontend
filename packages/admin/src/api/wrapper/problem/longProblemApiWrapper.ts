import {
  IProblemListRequest,
  IProblemDetailRequest,
  IProblemDetailResponse,
  IProblemCreateData,
  IProblemListData,
} from '../../../types/problem/api';
import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { isEmptyOrNotNumericError } from '../../../error';

export const longProblemApiWrapper = {
  getLongProblemList: (params?: IProblemListRequest) => {
    return apiClient
      .get(API_URL.LONG_PROBLEM_LIST, {
        params: { ...params, size: 10 },
      })
      .then((response: { data: IProblemListData }) => {
        return response.data;
      });
  },
  getLongProblemDetail: ({ problem_id }: IProblemDetailRequest) => {
    isEmptyOrNotNumericError(problem_id);
    return apiClient
      .get(API_URL_WITH_PARAMS.LONG_PROBLEM_DETAIL(problem_id!))
      .then((response: { data: IProblemDetailResponse }) => {
        return response.data;
      });
  },
  createLongProblem: (data: IProblemCreateData) => {
    apiClient.post(API_URL.LONG_PROBLEM_CREATE, data);
  },
  updateLongProblem: (problem_id: string, data: IProblemCreateData) => {
    isEmptyOrNotNumericError(problem_id);
    return apiClient.put(API_URL_WITH_PARAMS.LONG_PROBLEM_UPDATE(problem_id), data);
  },
};
