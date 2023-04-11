import { circleStyle, labelWrapperStyle, nameStyle } from './style.css';

interface IColorLabel {
  color: string;
  name: string;
}

export const ColorLabel = ({ color, name }: IColorLabel) => {
  return (
    <div className={labelWrapperStyle}>
      <div style={{ backgroundColor: color }} className={circleStyle} />
      <div className={nameStyle}>{name}</div>
    </div>
  );
};
