import {
  IDataListRequest,
  IDataListCreateRequestData,
  IDataDetailRequest,
  IDataListResponse,
} from '../../../types/data/api';
import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';

export const dataApiWrapper = {
  getDataList: (params?: IDataListRequest) => {
    return apiClient
      .get(API_URL.DATA_LIST, {
        params: { ...params, size: 10 },
      })
      .then((res: { data: IDataListResponse }) => res.data);
  },
  postDataList: (data: IDataListCreateRequestData) => {
    apiClient.post(API_URL.DATA_LIST_CREATE, data).then((response) => response.data);
  },
  getDataDetail: ({ user_answer_id }: IDataDetailRequest) => {
    return apiClient
      .get(API_URL_WITH_PARAMS.DATA_DETAIL(user_answer_id))
      .then((response) => response.data);
  },
  labelingData: ({ user_answer_id, selectedGradingStandardIds }: IDataDetailRequest) => {
    const data = { selectedGradingStandardIds };
    return apiClient.post(API_URL_WITH_PARAMS.DATA_LABELING(user_answer_id), data);
  },
  validatingData: ({ user_answer_id, selectedGradingStandardIds }: IDataDetailRequest) => {
    const data = { selectedGradingStandardIds };
    return apiClient.post(API_URL_WITH_PARAMS.DATA_VALIDATING(user_answer_id), data);
  },
};
