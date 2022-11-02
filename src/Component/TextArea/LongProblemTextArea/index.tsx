import { KeyboardEvent } from 'react';
import {
  answerInputContentStyle,
  charCntWarningStyle,
  charCntWrapperStyle,
  contentTitleStyle,
  hiddenStyle,
} from './style.css';

interface ILongProblemTextArea {
  userAnswer: string;
  onTextAreaChange: (event: KeyboardEvent) => void;
}

const MIN_CHAR_CNT = 10;
const MAX_CHAR_CNT = 300;

export const LongProblemTextArea = ({ userAnswer, onTextAreaChange }: ILongProblemTextArea) => {
  return (
    <>
      <label htmlFor='answer' className={contentTitleStyle}>
        답안 작성
      </label>
      <textarea
        id='answer'
        placeholder='답변을 입력해주세요'
        className={answerInputContentStyle}
        minLength={MIN_CHAR_CNT}
        maxLength={MAX_CHAR_CNT}
        onKeyUp={onTextAreaChange}
        defaultValue={userAnswer ?? undefined}
      ></textarea>
      <div className={charCntWrapperStyle}>
        <div>
          {userAnswer?.length}/{MAX_CHAR_CNT}
        </div>
        <div className={`${charCntWarningStyle} ${userAnswer?.length >= 10 ? hiddenStyle : ''}`}>
          답변을 10자 이상 작성해주세요.
        </div>
      </div>
    </>
  );
};
