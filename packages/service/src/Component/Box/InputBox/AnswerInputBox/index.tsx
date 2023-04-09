import { answerInputContentStyle, answerInputStyle, answerInputTitleStyle } from './style.css';

function AnswerInputBox() {
  return (
    <div className={answerInputStyle}>
      <label htmlFor='answer' className={answerInputTitleStyle}>
        답안 작성
      </label>
      <textarea id='answer' className={answerInputContentStyle}></textarea>
    </div>
  );
}
export default AnswerInputBox;
