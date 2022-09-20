import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { ICommonStats } from '../../../types/api/common';

export const commonApiWrapper = {
  stats: () => {
    return apiClient.get(API_URL.STATS).then((res: { data: ICommonStats }) => {
      return res.data;
    });
  },
};
