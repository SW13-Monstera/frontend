import { tagStyle } from './style.css';

interface ITechTagBox {
  name: string;
  color?: string;
}

export const TechTagBox = ({ name, color }: ITechTagBox) => {
  return (
    <li className={tagStyle} style={{ backgroundColor: color }}>
      <div>{name}</div>
    </li>
  );
};
