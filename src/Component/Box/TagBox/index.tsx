import { tagStyle } from './style.css';

interface ITagBox {
  name: string;
}

function TagBox({ name }: ITagBox) {
  return <li className={tagStyle}>{name}</li>;
}

export default TagBox;
