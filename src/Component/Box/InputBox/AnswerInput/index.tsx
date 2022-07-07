import { answerInputStyle } from './style.css';

function AnswerInput() {
  return (
    <div className={answerInputStyle}>
      <label htmlFor="answer">답안 작성</label>
      <input id="answer"></input>
    </div>
  );
}
export default AnswerInput;
