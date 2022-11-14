import {
  descStyle,
  questionContentStyle,
  topStyle,
  bottomContentStyle,
  pageStyle,
} from './style.css';
import { useParams } from 'react-router-dom';
import ProblemTitle from '../../Organism/ProblemTitle';
import { IProblemDetailPageTemplate } from '../../types/problem';
import { ProblemDetailButtonList } from './ButtonList/Problem';

export const ProblemDetailPageTemplate = ({
  data,
  children,
  handleSubmit,
  bottomContent,
  isResult = false,
  resetResult = () => {
    return;
  },
  isResultPage = false,
  isSubmittable = false,
}: IProblemDetailPageTemplate) => {
  const { id } = useParams();

  if (!id) return <></>;

  return (
    <>
      <div>
        {data ? (
          <>
            <div className={pageStyle}>
              <div className={topStyle}>
                <div className={descStyle}>
                  <ProblemTitle
                    id={id}
                    title={data.title ?? ''}
                    tags={data.tags ?? []}
                    totalSubmission={data.totalSubmission}
                    avgScore={data.avgScore}
                    topScore={data.topScore}
                    bottomScore={data.bottomScore}
                    correctSubmission={data.correctSubmission}
                    correctUserCnt={data.correctUserCnt}
                    isSolved={data.isSolved ?? false}
                  />
                </div>
              </div>
              <div className={questionContentStyle}>{children}</div>
              <ProblemDetailButtonList
                handleSubmit={handleSubmit}
                isResult={isResult}
                resetResult={resetResult}
                isResultPage={isResultPage}
                isSubmittable={isSubmittable}
              />
            </div>
            <div className={bottomContentStyle}>{bottomContent}</div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
