import { getUserInfo } from './../../../utils/userInfo';
import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import {
  IProblemRequestParam,
  ILongProblemDetailResponseData,
  IShortProblemDetailResponseData,
  IMultipleProblemDetailResponseData,
  ILongProblemResultData,
  IShortProblemResultData,
  IMultipleProblemResultData,
  IAssessmentRequest,
} from '../../../types/api/problem';
import { BEARER_TOKEN } from '../../../constants/api';
import { AxiosRequestConfig } from 'axios';

export const problemApiWrapper = {
  problemList: (params?: IProblemRequestParam) => {
    const config: AxiosRequestConfig<IProblemRequestParam> = {
      params: params,
    };
    if (params?.isSolved) {
      const userInfo = getUserInfo();
      if (!userInfo) throw new Error('userinfo not found');
      config.headers = { Authorization: BEARER_TOKEN(userInfo.accessToken) };
    }
    return apiClient.get(API_URL.PROBLEM_LIST, config).then(
      (res) => res.data,
      (err) => {
        throw new Error('문제 목록 불러오기 실패');
      },
    );
  },
  longProblemDetail: (problem_id: string) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.LONG_PROBLEM_DETAIL(problem_id))
      .then((res: { data: ILongProblemDetailResponseData }) => res.data);
  },
  shortProblemDetail: (problem_id: string) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.SHORT_PROBLEM_DETAIL(problem_id))
      .then((res: { data: IShortProblemDetailResponseData }) => res.data);
  },
  multipleProblemDetail: (problem_id: string) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.MULTIPLE_PROBLEM_DETAIL(problem_id))
      .then((res: { data: IMultipleProblemDetailResponseData }) => res.data);
  },
  longProblemResult: (problem_id: string, answer: string) => {
    return apiClient
      .post(API_URL_WITH_PARAMS.LONG_PROBLEM_RESULT(problem_id), { answer: answer })
      .then((res: { data: ILongProblemResultData }) => res.data);
  },
  shortProblemResult: (problem_id: string, answer: string) => {
    return apiClient
      .post(API_URL_WITH_PARAMS.SHORT_PROBLEM_RESULT(problem_id), { answer: answer })
      .then((res: { data: IShortProblemResultData }) => res.data);
  },
  multipleProblemResult: (problem_id: string, answerIds: number[]) => {
    return apiClient
      .post(API_URL_WITH_PARAMS.MULTIPLE_PROBLEM_RESULT(problem_id), { answerIds: answerIds })
      .then((res: { data: IMultipleProblemResultData }) => res.data);
  },
  assessment: (problem_id: string, data: IAssessmentRequest) => {
    return apiClient.post(API_URL_WITH_PARAMS.ASSESSMENT(problem_id), data);
  },
};
