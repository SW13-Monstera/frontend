import {
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

interface LongProblemPostBase {
  id: number;
  content: string;
  username: string;
  likeCount: number;
  isLiked: boolean;
}

interface LongProblemPostComment extends LongProblemPostBase {
  createdAt: string;
}

interface LongProblemPost extends LongProblemPostBase {
  comments: LongProblemPostComment[];
}

const PostBox = ({ content, username, likeCount, isLiked, comments }: LongProblemPost) => {
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
          <button type='button' className={likeButton}>
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
          </div>
        </div>
      </div>
    </Box>
  );
};
export default PostBox;
