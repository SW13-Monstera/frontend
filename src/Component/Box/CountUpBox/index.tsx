import CountUp from 'react-countup';
import { statisticsBoxStyle, statisticsLabelStyle, statisticsNumberStyle } from './style.css';

interface ICountUpBox {
  title: string;
  number: number | undefined;
}

export const CountUpBox = ({ title, number }: ICountUpBox) => {
  return (
    <div className={statisticsBoxStyle}>
      <div className={statisticsLabelStyle}>{title}</div>
      <div className={statisticsNumberStyle}>
        <CountUp end={number ?? 0} duration={0.7} />
      </div>
    </div>
  );
};
