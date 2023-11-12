import { useEffect, useState } from 'react';
import { TextBox } from '../../../../Component/Box';
import { MarkdownBox } from '../../../../Component/Box/MarkdownBox';
import { ILongProblemSubmitData } from '../../../../types/api/problem';
import { contentStyle, standardAnswerContentStyle, subtitleStyle } from '../../style.css';

export const StandardAnswerContent = ({ result }: { result: ILongProblemSubmitData }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const answer = result?.standardAnswer;
    let curIdx = 0;

    function write() {
      if (!answer) return;

      setText(answer.slice(0, curIdx));
      if (curIdx++ === answer.length) {
        curIdx = 0;
        const cursor = document.querySelector('.markdown.standard-answer') as HTMLElement;
        cursor.classList.add('done');
      } else {
        setTimeout(() => {
          write();
        }, 50);
      }
    }
    write();
  }, []);

  return (
    <div className={contentStyle}>
      <h3 className={subtitleStyle}>모범 답안</h3>
      <TextBox>
        <div className={standardAnswerContentStyle}>
          <MarkdownBox className={'standard-answer'}>{text}</MarkdownBox>
        </div>
      </TextBox>
    </div>
  );
};
