import '../../../styles/gutter.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IMultipleProblemDetailResponseData,
  IMultipleProblemResultData,
} from '../../../types/api/problem';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';
import Split from 'react-split';
import {
  choiceCheckboxStyle,
  choiceListStyle,
  choiceWrapperStyle,
  contentTitleStyle,
  contentWrapperStyle,
  problemDescContentStyle,
  splitStyle,
} from './style.css';

export function MultipleQuestionDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<IMultipleProblemDetailResponseData | null>(null);
  const [result, setResult] = useState<IMultipleProblemResultData | null>(null);

  function handleSubmit() {
    if (!id) return;
    const answerIds: number[] = [];
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((e) => (e.checked ? answerIds.push(parseInt(e.id)) : ''));
    problemApiWrapper.multipleProblemResult(id, answerIds);
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.multipleProblemDetail(id).then((data) => {
      setData(data);
    });
  }, []);

  if (!id) return <></>;

  return (
    <ProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
        className={splitStyle}
      >
        <div className={contentWrapperStyle}>
          <div className={contentTitleStyle}>문제 설명</div>
          <div className={problemDescContentStyle}>{data?.description}</div>
        </div>
        <div className={contentWrapperStyle}>
          <label htmlFor='answer' className={contentTitleStyle}>
            답안 선택
          </label>
          <div className={choiceListStyle}>
            {data?.choices.map((choice) => (
              <label htmlFor={choice.id.toString()} className={choiceWrapperStyle} key={choice.id}>
                <input type='checkbox' id={choice.id.toString()} className={choiceCheckboxStyle} />
                {choice.content}
              </label>
            ))}
          </div>
        </div>
      </Split>
    </ProblemDetailPageTemplate>
  );
}
