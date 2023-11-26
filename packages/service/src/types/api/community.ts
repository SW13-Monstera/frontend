export interface ICommunityPostRequestParam {
  problemId: string;
}

export interface IAddCommunityPostRequestBody {
  problemId: number;
  content: string;
}

export interface ILikeCommunityPostRequestParam {
  postId: string;
}

export interface IAddCommunityCommentRequestBody {
  postId: number;
  content: string;
}
