export interface ICommunityPostRequestParam {
  problemId: string;
}

export interface LongProblemPostBase {
  id: number;
  content: string;
  username: string;
  likeCount: number;
  isLiked: boolean;
}

export interface LongProblemPostComment extends LongProblemPostBase {
  createdAt: string;
}

export interface LongProblemPost extends LongProblemPostBase {
  comments: LongProblemPostComment[];
}

export interface IAddCommunityPostRequestBody {
  problemId: number;
  content: string;
}

export interface ILikeCommunityPostRequestParam {
  postId: number;
}

export interface IAddCommunityCommentRequestBody {
  postId: number;
  content: string;
}
