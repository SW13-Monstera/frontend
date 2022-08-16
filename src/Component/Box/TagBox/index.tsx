import { ITagBox } from '../../../types/tag';
import { tagBoxColorStyle, tagStyle } from './style.css';

function TagBox({ name, color }: ITagBox) {
  return (
    <li className={`${tagStyle} ${tagBoxColorStyle[color]}`}>
      <div>{name}</div>
    </li>
  );
}

export default TagBox;
