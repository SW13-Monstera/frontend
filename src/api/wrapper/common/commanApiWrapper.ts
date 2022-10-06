import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';
import { ICommonStats } from '../../../types/api/common';
import { getUserInfo } from '../../../utils/userInfo';
import { toast } from 'react-toastify';
import { BEARER_TOKEN } from '../../../constants/api';

export const commonApiWrapper = {
  stats: () => {
    return apiClient.get(API_URL.STATS, {}).then((res: { data: ICommonStats }) => {
      return res.data;
    });
  },

  uploadImg: (formData: FormData) => {
    const userInfo = getUserInfo();

    if (!userInfo) {
      toast('업로드 실패');
      throw new Error('업로드 실패');
    }

    return apiClient
      .post(API_URL.UPLOAD_IMG, formData, {
        headers: {
          Authorization: BEARER_TOKEN(userInfo.accessToken),
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(
        (res) => res.data,
        (err) => {
          toast('업로드 실패');
          throw new Error('업로드 실패');
        },
      );
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
};
