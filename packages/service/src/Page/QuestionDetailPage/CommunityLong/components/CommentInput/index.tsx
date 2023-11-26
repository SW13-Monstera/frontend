import { TextButton } from '../../../../../Component/Button';
import { textareaStyle, textareaWrapStyle, wrapStyle } from './style.css';

const CommentInput = () => {
  return (
    <div className={wrapStyle}>
      <div className={textareaWrapStyle}>
        <textarea className={textareaStyle} />
      </div>
      <TextButton theme='primary' size='xsmall' type='button'>
        제출하기
      </TextButton>
    </div>
  );
};
export default CommentInput;
