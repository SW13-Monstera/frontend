import { ProblemDetailPageTemplate } from '../ProblemDetailPageTemplate';
import Split from 'react-split';
import {
  contentTitleStyle,
  contentWrapperStyle,
  problemDescContentStyle,
  splitStyle,
} from './style.css';
import { IProblemDetailPageTemplate } from '../../types/problem';
import { MarkdownBox } from '../../Component/Box/MarkdownBox';

export const SplitProblemDetailPageTemplate = ({
  data,
  children,
  handleSubmit,
  isResult,
  resetResult,
  isResultPage,
}: IProblemDetailPageTemplate) => {
  return (
    <ProblemDetailPageTemplate
      data={data}
      handleSubmit={handleSubmit}
      isResult={isResult}
      resetResult={resetResult}
      isResultPage={isResultPage}
    >
      <Split
        sizes={[35, 65]}
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
          <div className={problemDescContentStyle}>
            <MarkdownBox>{data?.description}</MarkdownBox>
          </div>
        </div>
        <div className={contentWrapperStyle}>{children}</div>
      </Split>
    </ProblemDetailPageTemplate>
  );
};
