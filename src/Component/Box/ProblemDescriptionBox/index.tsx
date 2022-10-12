import { MarkdownBox } from '../MarkdownBox';
import { contentTitleStyle, problemDescContentStyle } from './style.css';

interface IProblemDescriptionBox {
  children: string | undefined;
}

export const ProblemDescriptionBox = ({ children }: IProblemDescriptionBox) => {
  return (
    <>
      <div className={contentTitleStyle}>문제 설명</div>
      <div className={problemDescContentStyle}>
        <MarkdownBox>{children}</MarkdownBox>
      </div>
    </>
  );
};
