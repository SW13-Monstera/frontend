import { TextButton } from '../../../../../Component/Button';
import Box from '../Box';
import { buttonStyle, textareaStyle, textareaWrapStyle, titleStyle, wrapStyle } from './style.css';

const PostInput = () => {
  return (
    <Box className={wrapStyle}>
      <label htmlFor='post-input' className={titleStyle}>
        내 답변
      </label>
      <div className={textareaWrapStyle}>
        <textarea className={textareaStyle} id='post-input' name='post-input' />
      </div>
      <TextButton theme='primary' size='small' type='submit' className={buttonStyle}>
        제출하기
      </TextButton>
    </Box>
  );
};
export default PostInput;
