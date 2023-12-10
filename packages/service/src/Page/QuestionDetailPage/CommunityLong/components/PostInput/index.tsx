import { TextButton } from '../../../../../Component/Button';
import { buttonStyle, textareaStyle, textareaWrapStyle } from './style.css';

const PostInput = () => {
  return (
    <>
      <div className={textareaWrapStyle}>
        <textarea className={textareaStyle} id='post-input' name='post-input' />
      </div>
      <TextButton theme='primary' size='small' type='submit' className={buttonStyle}>
        제출하기
      </TextButton>
    </>
  );
};
export default PostInput;
