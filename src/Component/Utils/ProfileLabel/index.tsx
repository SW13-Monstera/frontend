import { nameStyle, profileLabelStyle, valueStyle } from './style.css';

interface IProfileLabel {
  name: string;
  value: string;
}

export const ProfileLabel = ({ name, value }: IProfileLabel) => {
  return (
    <div className={profileLabelStyle}>
      <div className={nameStyle}>{name}</div>
      <div className={valueStyle}>{value}</div>
    </div>
  );
};
