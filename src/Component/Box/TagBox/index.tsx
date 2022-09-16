import { ITagBox } from '../../../types/tag';
import { tagColorStyle } from './style.css';

function TagBox({ name, color = 'color1' }: ITagBox) {
  return (
    <li className={tagColorStyle[color]}>
      <div>{name}</div>
    </li>
  );
}

export default TagBox;
