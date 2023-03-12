import { useEffect, useRef } from 'react';
import { TextBox } from '../../../../Component/Box';
import { MarkdownBox } from '../../../../Component/Box/MarkdownBox';
import { ILongProblemResult } from '../../../../types/problem';
import { typewriter } from '../../../../utils/typewriter';
import { contentStyle, standardAnswerContentStyle, subtitleStyle } from '../../style.css';
import { textStyle } from './style.css';

export const StandardAnswerContent = ({ result }: ILongProblemResult) => {
  const answerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    typewriter(answerRef, result?.standardAnswer);
  }, []);

  return (
    <div className={contentStyle}>
      <h3 className={subtitleStyle}>모범 답안</h3>
      <TextBox>
        <div className={standardAnswerContentStyle}>
          <MarkdownBox></MarkdownBox>
          <p ref={answerRef} className={textStyle}></p>
        </div>
      </TextBox>
    </div>
  );
};
