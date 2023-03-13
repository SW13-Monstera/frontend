import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import './markdown.css';

interface IMarkdownBox {
  children?: string | undefined;
  className?: string;
}

export const MarkdownBox = ({ children, className }: IMarkdownBox) => {
  return (
    <ReactMarkdown
      className={`markdown ${className}`}
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt='' />,
      }}
    >
      {children ?? ''}
    </ReactMarkdown>
  );
};
