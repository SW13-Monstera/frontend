import { ProblemDetailPageTemplate } from '../ProblemDetailPageTemplate';
import Split from 'react-split';
import { contentWrapperSideStyle, splitStyle } from './style.css';
import { ISplitProblemDetailPageTemplate } from '../../types/problem';
import { useDarkModeStore } from '../../hooks/useStore';
import { useEffect } from 'react';
import '../../styles/gutter/base.css';

export const SplitProblemDetailPageTemplate = ({
  data,
  leftSideContent,
  rightSideContent,
  bottomContent,
  handleSubmit,
  isResult,
  resetResult,
  isResultPage,
  sizes = [35, 65],
}: ISplitProblemDetailPageTemplate) => {
  const { isDark } = useDarkModeStore();

  useEffect(() => {
    const gutter = document.getElementsByClassName('gutter');
    if (gutter.length !== 0) {
      const gutterItem = gutter[0] as HTMLElement;
      gutterItem.classList.add(isDark ? 'gutter-dark' : 'gutter-light');
      gutterItem.classList.remove(isDark ? 'gutter-light' : 'gutter-dark');
    }
  }, [isDark]);

  return (
    <ProblemDetailPageTemplate
      data={data}
      handleSubmit={handleSubmit}
      isResult={isResult}
      resetResult={resetResult}
      isResultPage={isResultPage}
      bottomContent={bottomContent}
    >
      <Split
        sizes={sizes}
        minSize={100}
        expandToMin={false}
        gutter={() => {
          const gutter = document.createElement('div');
          gutter.className = `gutter gutter-horizontal ${isDark ? 'gutter-dark' : 'gutter-light'}`;
          return gutter;
        }}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
        className={splitStyle}
      >
        <div className={contentWrapperSideStyle.left}>{leftSideContent}</div>
        <div className={contentWrapperSideStyle.right}>{rightSideContent}</div>
      </Split>
    </ProblemDetailPageTemplate>
  );
};
