import { getUserInfo } from 'auth/utils/userInfo';
import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import {
  IProblemRequestParam,
  ILongProblemDetailResponseData,
  IMultipleProblemDetailResponseData,
  ILongProblemResultData,
  IShortProblemResultData,
  IMultipleProblemResultData,
  IAssessmentRequest,
  IShortProblemDetailResponseDataV2,
  TProblemSetListResponse,
  IProblemSetDetailResponse,
  ILikeProblemRequestParam,
  ILongProblemSubmitData,
} from '../../../types/api/problem';
import { AxiosRequestConfig } from 'axios';
import { BEARER_TOKEN } from 'auth/constants';

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
    return apiClient.get(API_URL.PROBLEM_LIST, config).then((res) => res.data);
  },
  longProblemDetail: (problem_id: string) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.LONG_PROBLEM_DETAIL(problem_id))
      .then((res: { data: ILongProblemDetailResponseData }) => res.data);
  },
  shortProblemDetailV2: (problem_id: string) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.SHORT_PROBLEM_DETAIL_V2(problem_id))
      .then((res: { data: IShortProblemDetailResponseDataV2 }) => res.data);
  },
  multipleProblemDetail: (problem_id: string) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.MULTIPLE_PROBLEM_DETAIL(problem_id))
      .then((res: { data: IMultipleProblemDetailResponseData }) => res.data);
  },
  longProblemSubmit: (problem_id: string, answer: string) => {
    return apiClient
      .post(API_URL_WITH_PARAMS.LONG_PROBLEM_SUBMIT(problem_id), {
        answer,
      })
      .then((res: { data: ILongProblemSubmitData }) => res.data);
  },
  longProblemResult: (problem_id: string, answer: string) => {
    return apiClient
      .post(
        API_URL_WITH_PARAMS.LONG_PROBLEM_RESULT(problem_id),
        {
          answer: answer,
        },
        { params: { isGrading: false } },
      )
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
  problemSetList: () => {
    return apiClient.get<TProblemSetListResponse>(API_URL.PROBLEM_SET_LIST).then((res) => res.data);
  },
  problemSetDetail: (problem_set_id: string) => {
    return apiClient
      .get<IProblemSetDetailResponse>(API_URL_WITH_PARAMS.PROBLEM_SET_DETAIL(problem_set_id))
      .then((res) => res.data);
  },
  shuffle: (size: number) => {
    return apiClient.get(API_URL.PROBLEM_SHUFFLE, { params: { size } }).then((res) => res.data);
  },
  likeProblem: ({ problemId }: ILikeProblemRequestParam) => {
    return apiClient.post(API_URL_WITH_PARAMS.LIKE_PROBLEM(problemId)).then((res) => res.data);
  },
  bookmarkProblem: ({ problemId }: ILikeProblemRequestParam) => {
    return apiClient.post(API_URL_WITH_PARAMS.BOOKMARK_PROBLEM(problemId)).then((res) => res.data);
  },
};
