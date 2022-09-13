import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import './markdown.css';

interface IMarkdownBox {
  children: string | undefined;
}

export const MarkdownBox = ({ children }: IMarkdownBox) => {
  return (
    <ReactMarkdown
      className='markdown'
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
    >
      {children ?? ''}
    </ReactMarkdown>
  );
};