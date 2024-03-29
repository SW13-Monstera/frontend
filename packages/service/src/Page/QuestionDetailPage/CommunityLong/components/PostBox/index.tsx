import {
  addCommentButton,
  commentListWrap,
  contentWrap,
  dateTime,
  mainUserName,
  mainWrap,
  profileImage,
  profileImageWrap,
  profileLink,
  profileWrap,
  rightWrap,
  userName,
} from './style.css';
import { ReactComponent as ProfileImageIcon } from '../../../../../assets/icons/mypage-icon.svg';
import { ReactComponent as ThumbUpIcon } from '../../../../../assets/icons/thumb_up.svg';
import Box from '../Box';
import { COLOR } from '../../../../../constants/color';
import { parseDateTime } from '../../../../../utils/parseDateTime';
import CommentInput from '../CommentInput';
import { useState } from 'react';
import { LongProblemPost } from '../../../../../types/api/community';
import { QueryObserverResult, useMutation } from 'react-query';
import { communityApiWrapper } from '../../../../../api/wrapper/community/communityApiWrapper';
import IconButton from '../IconButton';
import { isLogin } from 'auth/utils/userInfo';
import { Link } from 'react-router-dom';
import { URLWithParam } from '../../../../../constants/url';

type Props = {
  refetchCommunityPost: () => Promise<QueryObserverResult<LongProblemPost[], unknown>>;
} & LongProblemPost;

const PostBox = ({
  id,
  content,
  userId,
  username,
  likeCount,
  isLiked,
  comments,
  refetchCommunityPost,
}: Props) => {
  const [isCommentInputShow, setIsCommentInputShow] = useState(false);
  const { mutate: likePost } = useMutation(
    ['likeProblem', id],
    () => communityApiWrapper.likePost({ postId: id }),
    { onSuccess: () => refetchCommunityPost() },
  );

  return (
    <Box>
      <div className={mainWrap}>
        <div className={profileWrap}>
          <Link to={URLWithParam.PROFILE(userId)} className={profileLink}>
            <div className={profileImageWrap}>
              <ProfileImageIcon className={profileImage} />
            </div>
            <div className={mainUserName}> {username}</div>
          </Link>
          <IconButton
            text={likeCount.toString()}
            onClick={() => {
              likePost();
            }}
          >
            <ThumbUpIcon fill={isLiked ? COLOR.PRIMARY : COLOR.GRAY} width='2rem' height='2rem' />
          </IconButton>
        </div>
        <div className={rightWrap}>
          <div className={contentWrap}>{content}</div>

          <div className={commentListWrap}>
            {comments
              .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
              .map(({ id, content, username, userId, createdAt }) => (
                <div key={id}>
                  {content} -
                  <Link to={URLWithParam.PROFILE(userId)} className={userName}>
                    {username}
                  </Link>
                  <span className={dateTime}>{parseDateTime(createdAt)}</span>
                </div>
              ))}
            {isLogin() &&
              (!isCommentInputShow ? (
                <button
                  type='button'
                  onClick={() => {
                    setIsCommentInputShow(true);
                  }}
                  className={addCommentButton}
                >
                  댓글 작성하기
                </button>
              ) : (
                <CommentInput postId={id} refetchCommunityPost={refetchCommunityPost} />
              ))}
          </div>
        </div>
      </div>
    </Box>
  );
};
export default PostBox;
