import { MyScoreBox } from '../../../Component/Box/MyScoreBox';
import { COLOR } from '../../../constants/color';
import { OIcon } from '../../../Icon/OIcon';
import { XIcon } from '../../../Icon/XIcon';
import { IChoice, IMultipleProblemResultData } from '../../../types/api/problem';
import {
  choiceCheckboxStyle,
  choiceListStyle,
  choiceWrapperStyle,
  contentTitleStyle,
  gradeResultScoredStyle,
  resultWrapperStyle,
} from './style.css';

interface IMultipleChoiceList {
  choices: IChoice[] | undefined;
  result: IMultipleProblemResultData | null;
  resetResult: () => void;
}

export const MultipleChoiceList = ({ choices, result, resetResult }: IMultipleChoiceList) => {
  return (
    <>
      <label htmlFor='answer' className={contentTitleStyle}>
        답안 선택
      </label>
      <div className={choiceListStyle} onClick={resetResult}>
        {choices?.map((choice) => (
          <label htmlFor={choice.id.toString()} className={choiceWrapperStyle} key={choice.id}>
            <input type='checkbox' id={choice.id.toString()} className={choiceCheckboxStyle} />
            {choice.content}
          </label>
        ))}
      </div>
      <div className={resultWrapperStyle}>
        <MyScoreBox score={result?.score} />
        {result ? (
          result.isAnswer ? (
            <div className={gradeResultScoredStyle.correct}>
              <div>정답입니다</div>
              <OIcon fill={COLOR.CORRECT} width='2rem' height='2rem' />
            </div>
          ) : (
            <div className={gradeResultScoredStyle.wrong}>
              <div>오답입니다</div>
              <XIcon fill={COLOR.ERROR} width='2rem' height='2rem' />
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
