import apiClient from '../../apiClient';
import { API_URL } from '../../../constants/apiUrl';

export const problemApiWrapper = {
  problemList: () => {
    return apiClient.get(API_URL.PROBLEM_LIST);
  },
};
