import { TextButton } from '../../../../../Component/Button';
import Box from '../Box';
import { buttonStyle, textareaStyle, textareaWrapStyle, titleStyle, wrapStyle } from './style.css';

const PostInput = () => {
  return (
    <Box className={wrapStyle}>
      <div className={titleStyle}>내 답변</div>
      <div className={textareaWrapStyle}>
        <textarea className={textareaStyle} />
      </div>
      <TextButton theme='primary' size='small' type='button' className={buttonStyle}>
        제출하기
      </TextButton>
    </Box>
  );
};
export default PostInput;
