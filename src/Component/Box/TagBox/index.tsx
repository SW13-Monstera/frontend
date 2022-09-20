import { ITagBox } from '../../../types/tag';
import { deleteButtonIsShownStyle, filterTagStyle, tagColorStyle } from './style.css';
import { XIcon } from '../../../Icon/XIcon';
import { COLOR } from '../../../constants/color';
import { useCheckedTagStore } from '../../../hooks/useStore';

const COLOR_MAP = {
  color1: COLOR.PURPLE,
  color2: COLOR.PINK,
  color3: COLOR.ORANGE,
  color4: COLOR.GREEN,
};

function TagBox({ id, name, color = 'color1', isFilter = false }: ITagBox) {
  const { checkedTags, setCheckedTags } = useCheckedTagStore();

  const onDeleteButtonClick = () => {
    setCheckedTags(checkedTags.filter((e) => e.id !== id));
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
