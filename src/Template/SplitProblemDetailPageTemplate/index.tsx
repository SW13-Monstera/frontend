import { ProblemDetailPageTemplate } from '../ProblemDetailPageTemplate';
import Split from 'react-split';
import {
  contentTitleStyle,
  contentWrapperStyle,
  problemDescContentStyle,
  splitStyle,
} from './style.css';
import { IProblemDetailPageTemplate } from '../../types/problem';

export const SplitProblemDetailPageTemplate = ({
  data,
  handleSubmit,
  children,
}: IProblemDetailPageTemplate) => {
  return (
    <ProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
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
          <div className={problemDescContentStyle}>{data?.description}</div>
        </div>
        <div className={contentWrapperStyle}>{children}</div>
      </Split>
    </ProblemDetailPageTemplate>
  );
};
