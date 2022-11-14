import { TextBox } from '../../../../Component/Box';
import { MarkdownBox } from '../../../../Component/Box/MarkdownBox';
import { MyScoreBox } from '../../../../Component/Box/MyScoreBox';
import { ILongProblemResult } from '../../../../types/problem';
import {
  contentStyle,
  myScoreStyle,
  standardAnswerContentStyle,
  subtitleStyle,
} from '../../style.css';

export const StandardAnswerContent = ({ result }: ILongProblemResult) => {
  return (
    <div className={contentStyle}>
      <h3 className={subtitleStyle}>모범 답안</h3>
      <TextBox>
        <div className={standardAnswerContentStyle}>
          <MarkdownBox>{result?.standardAnswer}</MarkdownBox>
        </div>
      </TextBox>
      <MyScoreBox score={result?.score} className={myScoreStyle} />
    </div>
  );
};
