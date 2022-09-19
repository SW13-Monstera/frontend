import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ArrowLeftIcon } from '../../../Icon/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../Icon/ArrowRightIcon';
import { themeColors } from '../../../styles/theme.css';

interface IHorizontalScrollMenu {
  children: any | any[];
}

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

export function HorizontalScrollMenu({ children }: IHorizontalScrollMenu) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id: string) => !!selected.find((el) => el === id);

  const handleClick =
    (id: string) =>
    ({}) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected ? currentSelected.filter((el) => el !== id) : [...currentSelected, id],
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {children}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev()} style={{ transform: 'rotate' }}>
      <ArrowLeftIcon fill={themeColors.text[5]} width='2rem' height='2rem' />
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext()}>
      <ArrowRightIcon fill={themeColors.text[5]} width='2rem' height='2rem' />
    </button>
  );
}
