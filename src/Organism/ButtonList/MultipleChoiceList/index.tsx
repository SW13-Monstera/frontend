import { ResultBox } from '../../../Component/Box/ResultBox';
import { IChoice, IMultipleProblemResultData } from '../../../types/api/problem';
import {
  choiceCheckboxStyle,
  choiceListStyle,
  choiceWrapperStyle,
  contentTitleStyle,
  isMultipleAnswerStyle,
  resultWrapperStyle,
} from './style.css';

interface IMultipleChoiceList {
  choices: IChoice[] | undefined;
  result: IMultipleProblemResultData | null;
  resetResult: () => void;
  isMultipleAnswer: boolean;
}

export const MultipleChoiceList = ({
  choices,
  result,
  resetResult,
  isMultipleAnswer,
}: IMultipleChoiceList) => {
  return (
    <>
      <label htmlFor='answer' className={contentTitleStyle}>
        답안 선택
        <span className={isMultipleAnswerStyle}>
          {isMultipleAnswer ? ' (복수 선택)' : ' (정답 한개)'}
        </span>
      </label>
      <div className={choiceListStyle} onClick={resetResult}>
        {choices?.map((choice) => (
          <label htmlFor={choice.id.toString()} className={choiceWrapperStyle} key={choice.id}>
            <input
              type={isMultipleAnswer ? 'checkbox' : 'radio'}
              id={choice.id.toString()}
              className={choiceCheckboxStyle}
              name='answer'
            />
            {choice.content}
          </label>
        ))}
      </div>
      <div className={resultWrapperStyle}>
        {result ? (
          <ResultBox
            isCorrect={result.isAnswer}
            score={result.score}
            onClick={resetResult}
            text={result.isAnswer ? '정답입니다' : '오답입니다'}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
