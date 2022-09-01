import { tagStyle } from './style.css';

interface ITechTagBox {
  name: string;
}

export const TechTagBox = ({ name }: ITechTagBox) => {
  return (
    <li className={tagStyle}>
      <div>{name}</div>
    </li>
  );
};
