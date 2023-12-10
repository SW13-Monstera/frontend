import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { ICommonStats } from '../../../types/api/common';

export const commonApiWrapper = {
  stats: () => {
    return apiClient.get(API_URL.STATS, {}).then((res: { data: ICommonStats }) => {
      return res.data;
    });
  },

  uploadImg: (formData: FormData) => {
    return apiClient.post(API_URL.UPLOAD_IMG, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getCoreTech: (query: string) => {
    return apiClient
      .get(API_URL.CORE_TECH, {
        params: { query },
      })
      .then((res) => res.data);
  },

  getMajor: (query: string) => {
    return apiClient
      .get(API_URL.MAJOR, {
        params: { query },
      })
      .then((res) => res.data);
  },
  getRank: (page: number) => {
    return apiClient.get(API_URL.RANKING, { params: { page } }).then((res) => res.data);
  },
  postChat: (question: string) => {
    return apiClient.post(API_URL.CHAT, { content: question }).then((res) => res.data);
  },
};
