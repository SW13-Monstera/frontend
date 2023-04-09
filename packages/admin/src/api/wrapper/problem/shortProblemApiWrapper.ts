import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import { IProblemDetailRequest, IProblemListRequest } from '../../../types/problem/api';
import {
  ICreateShortProblemRequest,
  IShortProblemDetailResponse,
  IShortProblemListResponse,
} from './../../../types/problem/shortApi';
import { isEmptyOrNotNumericError } from '../../../error';

export const shortProblemApiWrapper = {
  getShortProblemList: (params?: IProblemListRequest) => {
    return apiClient
      .get(API_URL.SHORT_PROBLEM_LIST, {
        params: { ...params, size: 10 },
      })
      .then((response: { data: IShortProblemListResponse }) => {
        return response.data;
      });
  },
  getShortProblemDetail: ({ problem_id }: IProblemDetailRequest) => {
    isEmptyOrNotNumericError(problem_id);
    return apiClient
      .get(API_URL_WITH_PARAMS.SHORT_PROBLEM_DETAIL(problem_id!))
      .then((response: { data: IShortProblemDetailResponse }) => {
        return response.data;
      });
  },
  createShortProblem: (data: ICreateShortProblemRequest) => {
    apiClient.post(API_URL.SHORT_PROBLEM_CREATE, data);
  },
  updateShortProblem: (problem_id: string, data: ICreateShortProblemRequest) => {
    isEmptyOrNotNumericError(problem_id);
    return apiClient.put(API_URL_WITH_PARAMS.SHORT_PROBLEM_UPDATE(problem_id), data);
  },
};
