import CountUp from 'react-countup';
import { statisticsBoxStyle, statisticsNumberStyle } from './style.css';

interface ICountUpBox {
  title: string;
  number: number;
}

export const CountUpBox = ({ title, number }: ICountUpBox) => {
  return (
    <div className={statisticsBoxStyle}>
      <div>{title}</div>
      <div className={statisticsNumberStyle}>
        <CountUp end={number} duration={0.7} />
      </div>
    </div>
  );
};
