import { TAGLIST } from '../../../constants';
import { tagStyle } from './style.css';

interface ITagBox {
  tagId: string;
}

const category = TAGLIST.find((e) => e.name === '카테고리');

function TagBox({ tagId }: ITagBox) {
  const name = category?.elements.find((e) => e.id === tagId)?.name ?? '';
  return (
    <li className={tagStyle}>
      <div>{name}</div>
    </li>
  );
}

export default TagBox;
