import { ResultBox } from '../../../Component/Box/ResultBox';
import { Checkbox } from '../../../Component/Input/Checkbox';
import { RadioButton } from '../../../Component/Input/RadioButton';
import { IChoice, IMultipleProblemResultData } from '../../../types/api/problem';
import {
  choiceListStyle,
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
          {isMultipleAnswer ? ' (복수 선택)' : ' (정답 한 개)'}
        </span>
      </label>
      <div className={choiceListStyle} onClick={resetResult}>
        {isMultipleAnswer
          ? choices?.map((choice) => (
              <Checkbox
                key={choice.id}
                id={choice.id.toString()}
                label={choice?.content}
                name='answer'
              />
            ))
          : choices?.map((choice) => (
              <RadioButton
                key={choice.id}
                id={choice.id.toString()}
                label={choice.content}
                name='answer'
              />
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
