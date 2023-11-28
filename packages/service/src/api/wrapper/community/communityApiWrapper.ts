import apiClient from '../../apiClient';
import { API_URL, API_URL_WITH_PARAMS } from '../../../constants/apiUrl';
import {
  IAddCommunityCommentRequestBody,
  IAddCommunityPostRequestBody,
  ICommunityPostRequestParam,
  ILikeCommunityPostRequestParam,
  LongProblemPost,
} from '../../../types/api/community';

export const communityApiWrapper = {
  getPost: async ({ problemId }: ICommunityPostRequestParam) => {
    const res = await apiClient.get<LongProblemPost[]>(
      API_URL_WITH_PARAMS.COMMUNITY_POST(problemId),
    );
    return res.data;
  },
  addPost: async (data: IAddCommunityPostRequestBody) => {
    const res = await apiClient.post(API_URL.ADD_COMMUNITY_POST, data);
    return res.data;
  },
  likePost: async ({ postId }: ILikeCommunityPostRequestParam) => {
    const res = await apiClient.get(API_URL_WITH_PARAMS.LIKE_COMMUNITY_POST(postId));
    return res.data;
  },
  addComment: async (data: IAddCommunityCommentRequestBody) => {
    const res = await apiClient.post(API_URL.ADD_COMMUNITY_COMMENT, data);
    return res.data;
  },
};
