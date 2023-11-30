import { QueryObserverResult, useMutation } from 'react-query';
import { communityApiWrapper } from '../../../../../api/wrapper/community/communityApiWrapper';
import { TextButton } from '../../../../../Component/Button';
import { LongProblemPost } from '../../../../../types/api/community';
import { textareaStyle, textareaWrapStyle, wrapStyle } from './style.css';

type Props = {
  postId: number;
  refetchCommunityPost: () => Promise<QueryObserverResult<LongProblemPost[], unknown>>;
};

const CommentInput = ({ postId, refetchCommunityPost }: Props) => {
  const { mutate: addComment } = useMutation(communityApiWrapper.addComment, {
    onSuccess: () => refetchCommunityPost(),
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const data = new FormData(formElement);
        const content = data.get('comment-input')?.toString();
        if (!content) return;
        addComment({ postId: postId, content });
        formElement.reset();
      }}
    >
      <div className={wrapStyle}>
        <div className={textareaWrapStyle}>
          <textarea className={textareaStyle} id='comment-input' name='comment-input' />
        </div>
        <TextButton theme='primary' size='xsmall' type='submit'>
          제출하기
        </TextButton>
      </div>
    </form>
  );
};
export default CommentInput;
