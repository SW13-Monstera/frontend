import { TextBox } from '../../../../Component/Box';
import { MarkdownBox } from '../../../../Component/Box/MarkdownBox';
import { ILongProblemResult } from '../../../../types/problem';
import { contentStyle, standardAnswerContentStyle, subtitleStyle } from '../../style.css';

export const StandardAnswerContent = ({ result }: ILongProblemResult) => {
  return (
    <div className={contentStyle}>
      <h3 className={subtitleStyle}>모범 답안</h3>
      <TextBox>
        <div className={standardAnswerContentStyle}>
          <MarkdownBox>{result?.standardAnswer}</MarkdownBox>
        </div>
      </TextBox>
    </div>
  );
};
