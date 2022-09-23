import { speechBubbleColorStyle } from './style.css';

const COMPARE_TO_AVERAGE = { same: 'same', bigger: 'bigger', smaller: 'smaller' };
type TCompareToAverage = keyof typeof COMPARE_TO_AVERAGE;

interface ISpeechBubbleBox {
  compareToAverage?: TCompareToAverage;
  children?: React.ReactNode;
}

export const SpeechBubbleBox = ({ compareToAverage, children }: ISpeechBubbleBox) => {
  return <div className={speechBubbleColorStyle[compareToAverage ?? 'same']}>{children}</div>;
};
