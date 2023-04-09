import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface IMarkdownCard {
  children: string | undefined;
}

export const MarkdownCard = ({ children }: IMarkdownCard) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
      {children ?? ''}
    </ReactMarkdown>
  );
};
