import {
  addCommentButton,
  commentListWrap,
  contentWrap,
  dateTime,
  likeButton,
  mainUserName,
  mainWrap,
  profileImage,
  profileImageWrap,
  profileLink,
  profileWrap,
  rightWrap,
  thumbUpIcon,
  userName,
} from './style.css';
import { ReactComponent as ProfileImageIcon } from '../../../../../assets/icons/mypage-icon.svg';
import { ReactComponent as ThumbUpIcon } from '../../../../../assets/icons/thumb_up.svg';
import Box from '../Box';
import { COLOR } from '../../../../../constants/color';
import { Link } from 'react-router-dom';
import { URLWithParam } from '../../../../../constants/url';
import { parseDateTime } from '../../../../../utils/parseDateTime';
import CommentInput from '../CommentInput';
import { useState } from 'react';
import { LongProblemPost } from '../../../../../types/api/community';
import { QueryObserverResult, useMutation } from 'react-query';
import { communityApiWrapper } from '../../../../../api/wrapper/community/communityApiWrapper';

type Props = {
  refetchCommunityPost: () => Promise<QueryObserverResult<LongProblemPost[], unknown>>;
} & LongProblemPost;

const PostBox = ({
  id,
  content,
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
          <Link
            to={URLWithParam.PROFILE('347df1ba-3c4b-4348-8201-4dc92c2d1c60')}
            className={profileLink}
          >
            <div className={profileImageWrap}>
              <ProfileImageIcon className={profileImage} />
            </div>
            <div className={mainUserName}> {username}</div>
          </Link>
          <button
            type='button'
            className={likeButton}
            onClick={() => {
              likePost();
            }}
          >
            <ThumbUpIcon fill={isLiked ? COLOR.PRIMARY : COLOR.GRAY} className={thumbUpIcon} />
            {likeCount}
          </button>
        </div>
        <div className={rightWrap}>
          <div className={contentWrap}>{content}</div>

          <div className={commentListWrap}>
            {comments.map(({ id, content, username, createdAt }) => (
              <div key={id}>
                {content} -{' '}
                <Link
                  to={URLWithParam.PROFILE('347df1ba-3c4b-4348-8201-4dc92c2d1c60')}
                  className={userName}
                >
                  {username}
                </Link>{' '}
                <span className={dateTime}>{parseDateTime(createdAt)}</span>
              </div>
            ))}
            {!isCommentInputShow ? (
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
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};
export default PostBox;
