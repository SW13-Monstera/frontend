import { ITagBox } from '../../../types/tag';
import { tagStyle } from './style.css';

function TagBox({ name, color }: ITagBox) {
  return (
    <li className={tagStyle} style={{ backgroundColor: color }}>
      <div>{name}</div>
    </li>
  );
}

export default TagBox;
