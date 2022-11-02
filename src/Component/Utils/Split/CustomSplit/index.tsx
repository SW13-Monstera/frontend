import { useEffect } from 'react';
import Split from 'react-split';
import { useDarkModeStore } from '../../../../hooks/useStore';
import { contentWrapperSideStyle, splitStyle } from './style.css';

interface ICustomSplit {
  leftSideContent: React.ReactNode;
  rightSideContent: React.ReactNode;
  sizes?: number[];
}

export const CustomSplit = ({
  leftSideContent,
  rightSideContent,
  sizes = [45, 55],
}: ICustomSplit) => {
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
  );
};
