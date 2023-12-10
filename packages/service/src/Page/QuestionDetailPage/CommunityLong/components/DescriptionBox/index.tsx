import Box from '../Box';
import IconButton from '../IconButton';
import { ReactComponent as StarIcon } from '../../../../../assets/icons/star.svg';
import { ReactComponent as ThumbUpIcon } from '../../../../../assets/icons/thumb_up.svg';
import { COLOR } from '../../../../../constants/color';
import { buttonWrap, descriptionWrap, topWrap, wrap } from './style.css';
import { QueryObserverResult, useMutation } from 'react-query';
import { problemApiWrapper } from '../../../../../api/wrapper/problem/problemApiWrapper';
import { ILongProblemDetailResponseData } from '../../../../../types/api/problem';
import { communityApiWrapper } from '../../../../../api/wrapper/community/communityApiWrapper';
import PostInput from '../PostInput';
import { LongProblemPost } from '../../../../../types/api/community';
import { getUserInfo } from 'auth/utils/userInfo';

type Props = {
  id: string;
  description: string;
  isLiked: boolean;
  likeCount: number;
  isBookmarked: boolean;
  bookmarkCount: number;
  refetchProblemDetail: () => Promise<QueryObserverResult<ILongProblemDetailResponseData, unknown>>;
  refetchCommunityPost: () => Promise<QueryObserverResult<LongProblemPost[], unknown>>;
};

const DescriptionBox = ({
  id,
  description,
  isLiked,
  likeCount,
  isBookmarked,
  bookmarkCount,
  refetchProblemDetail,
  refetchCommunityPost,
}: Props) => {
  const isLogin = !!getUserInfo()?.id;
  const { mutate: likeProblem } = useMutation(
    ['likeProblem', id],
    () => problemApiWrapper.likeProblem({ problemId: id }),
    { onSuccess: () => refetchProblemDetail() },
  );
  const { mutate: bookmarkProblem } = useMutation(
    ['bookmarkProblem', id],
    () => problemApiWrapper.bookmarkProblem({ problemId: id }),
    { onSuccess: () => refetchProblemDetail() },
  );
  const { mutate: addPost } = useMutation(communityApiWrapper.addPost, {
    onSuccess: () => refetchCommunityPost(),
  });

  return (
    <Box className={wrap}>
      <div className={topWrap}>
        <div>문제 설명</div>
        <div className={buttonWrap}>
          <IconButton
            text={bookmarkCount.toString()}
            onClick={() => {
              bookmarkProblem();
            }}
          >
            <StarIcon fill={isBookmarked ? COLOR.PRIMARY : COLOR.GRAY} width='2rem' height='2rem' />
          </IconButton>
          <IconButton
            text={likeCount.toString()}
            onClick={() => {
              likeProblem();
            }}
          >
            <ThumbUpIcon fill={isLiked ? COLOR.PRIMARY : COLOR.GRAY} width='2rem' height='2rem' />
          </IconButton>
        </div>
      </div>
      <div className={descriptionWrap}>{description}</div>
      {isLogin && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formElement = e.target as HTMLFormElement;
            const data = new FormData(formElement);
            const content = data.get('post-input')?.toString();
            if (!content) return;
            addPost({ problemId: parseInt(id), content });
            formElement.reset();
          }}
        >
          <PostInput />
        </form>
      )}
    </Box>
  );
};

export default DescriptionBox;
