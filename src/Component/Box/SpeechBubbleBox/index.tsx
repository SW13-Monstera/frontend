import { speechBubbleStyle } from './style.css';

interface ISpeechBubbleBox {
  color?: string;
  children?: React.ReactNode;
}

export const SpeechBubbleBox = ({ color, children }: ISpeechBubbleBox) => {
  return <div className={speechBubbleStyle}>{children}</div>;
};
