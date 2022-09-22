import { ITagBox } from '../../../types/tag';
import { deleteButtonIsShownStyle, filterTagStyle, tagColorStyle } from './style.css';
import { XIcon } from '../../../Icon/XIcon';
import { COLOR } from '../../../constants/color';
import { useCheckedTagStore } from '../../../hooks/useStore';
import { CHECKED_TAGS } from '../../../constants/localStorage';

const COLOR_MAP = {
  color1: COLOR.PURPLE,
  color2: COLOR.PINK,
  color3: COLOR.ORANGE,
  color4: COLOR.GREEN,
};

function TagBox({ id, name, color = 'color1', isFilter = false }: ITagBox) {
  const { checkedTags, setCheckedTags } = useCheckedTagStore();

  const onDeleteButtonClick = () => {
    const newCheckedTags = checkedTags.filter((e) => e.id !== id);
    setCheckedTags(newCheckedTags);
    localStorage.setItem(CHECKED_TAGS, JSON.stringify(newCheckedTags));
  };

  return (
    <li className={`${tagColorStyle[color]} ${isFilter ? filterTagStyle : ''}`}>
      <div>{name}</div>
      <button
        className={deleteButtonIsShownStyle[isFilter ? 'true' : 'false']}
        onClick={onDeleteButtonClick}
      >
        <XIcon width='.6rem' height='.6rem' fill={COLOR_MAP[color]} />
      </button>
    </li>
  );
}

export default TagBox;
