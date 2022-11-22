import { KeyboardEvent } from 'react';
import { ColumnBox, RowBox } from '../../Component/Box/CustomBox';
import { MyScoreBox } from '../../Component/Box/MyScoreBox';
import { COLOR } from '../../constants/color';
import { RESULT_TYPE } from '../../constants/problem';
import { OIcon } from '../../Icon/OIcon';
import { XIcon } from '../../Icon/XIcon';
import { hiddenStyle } from '../../styles/util.css';
import { IShortProblemResultData, TConsistOf } from '../../types/api/problem';
import {
  answerInputContentStyle,
  resultAnswerStyle,
  resultWrapperStyle,
  gapStyle,
  answerBoxWrapperStyle,
  showAnswerButtonStyle,
} from './style.css';

interface IShortAnswerInput {
  result: IShortProblemResultData | null;
  consistOf: TConsistOf;
  resetResult: () => void;
  handleSubmit: () => void;
  isAnswerShown: boolean;
  setIsAnswerShown: () => void;
}

export const ShortAnswerInput = ({
  result,
  resetResult,
  consistOf,
  handleSubmit,
  isAnswerShown,
  setIsAnswerShown,
}: IShortAnswerInput) => {
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  }
  return (
    <div className={resultWrapperStyle}>
      {result ? (
        <ColumnBox className={gapStyle}>
          <button
            className={isAnswerShown || result.isAnswer ? hiddenStyle : showAnswerButtonStyle}
            onClick={() => {
              setIsAnswerShown();
            }}
          >
            정답 보기
          </button>
          <RowBox className={answerBoxWrapperStyle}>
            <MyScoreBox score={result.score} />
            <button
              className={
                isAnswerShown
                  ? resultAnswerStyle['shown']
                  : result?.isAnswer
                  ? resultAnswerStyle[RESULT_TYPE.CORRECT]
                  : resultAnswerStyle[RESULT_TYPE.WRONG]
              }
              onClick={resetResult}
            >
              {isAnswerShown ? (
                <div>{result.correctAnswer}</div>
              ) : (
                <>
                  {result.isAnswer ? (
                    <OIcon fill={COLOR.GREEN} width='1.5rem' height='1.5rem' />
                  ) : (
                    <XIcon fill={COLOR.RED} width='1.5rem' height='1.5rem' />
                  )}
                  {result.userAnswer}
                </>
              )}
            </button>
          </RowBox>
        </ColumnBox>
      ) : (
        <input
          id='answer'
          placeholder={`답변을 "${
            consistOf === 'ENGLISH' ? '영어로' : consistOf === 'KOREAN' ? '한글로' : '숫자로'
          }" 입력해주세요`}
          className={answerInputContentStyle}
          autoComplete='off'
          onFocus={resetResult}
          onKeyDown={onKeyDown}
        ></input>
      )}
    </div>
  );
};
