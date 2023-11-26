import { contentWrap, profileImage, profileWrap } from './style.css';
import profileImageSrc from '../../../../../assets/icons/mypage-icon.svg';
import Box from '../Box';

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
      <div className={contentWrap}>
        <div className={profileWrap}>
          <img src={profileImageSrc} className={profileImage} />
          <div>{username}</div>
          <button type='button'>좋아요 {likeCount}</button>
        </div>
        <div>{content}</div>
      </div>
      <div>
        {comments.map(({ id, content }) => (
          <div key={id}>{content}</div>
        ))}
      </div>
    </Box>
  );
};
export default PostBox;
