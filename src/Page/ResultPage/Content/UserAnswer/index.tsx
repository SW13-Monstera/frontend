import { KeywordBox, TextBox } from '../../../../Component/Box';
import { USER_ANSWER_DOM_ID } from '../../../../constants/longProblem';
import { ILongProblemResult } from '../../../../types/problem';
import { ResultAssessment } from '../../components/ResultAssessment';
import {
  answerContentStyle,
  contentElementStyle,
  contentListStyle,
  contentStyle,
  keywordListStyle,
  subtitleStyle,
} from '../../style.css';

export const UserAnswerContent = ({ result }: ILongProblemResult) => {
  return (
    <div className={contentStyle}>
      <h3 className={subtitleStyle}>내 답안</h3>
      <h4>키워드 채점 기준</h4>
      <ul className={keywordListStyle}>
        {result?.keywords?.map(({ id, content, isExist }) => (
          <KeywordBox name={content} isIncluded={isExist} key={id} />
        ))}
      </ul>
      <h4>내용 채점 기준</h4>
      <ul className={contentListStyle}>
        {result?.contents?.map(({ id, content, isExist }) => (
          <li key={id} className={contentElementStyle[isExist ? 'true' : 'false']}>
            {content}
          </li>
        ))}
      </ul>
      <TextBox id={USER_ANSWER_DOM_ID} className={answerContentStyle} />
      <ResultAssessment gradingHistoryId={result?.gradingHistoryId} />
    </div>
  );
};
