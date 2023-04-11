import { ProblemDetailPageTemplate } from '../ProblemDetailPageTemplate';
import { ISplitProblemDetailPageTemplate } from '../../types/problem';
import '../../styles/gutter/base.css';
import { CustomSplit } from '../../Component/Utils/Split/CustomSplit';

export const SplitProblemDetailPageTemplate = ({
  data,
  leftSideContent,
  rightSideContent,
  bottomContent,
  handleSubmit,
  getAnswerWithoutSubmit,
  isResult,
  resetResult,
  isResultPage,
  isSubmittable = false,
  isLong = false,
  sizes = [35, 65],
}: ISplitProblemDetailPageTemplate) => {
  return (
    <ProblemDetailPageTemplate
      data={data}
      handleSubmit={handleSubmit}
      getAnswerWithoutSubmit={getAnswerWithoutSubmit}
      isResult={isResult}
      resetResult={resetResult}
      isResultPage={isResultPage}
      bottomContent={bottomContent}
      isSubmittable={isSubmittable}
      isLong={isLong}
    >
      <CustomSplit
        sizes={sizes}
        leftSideContent={leftSideContent}
        rightSideContent={rightSideContent}
      />
    </ProblemDetailPageTemplate>
  );
};
