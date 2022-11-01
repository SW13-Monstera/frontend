import { indexButtonStyle } from './style.css';
import { MouseEvent } from 'react';

interface ITabMenuButton {
  idx: number;
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const TabMenuButton = ({ idx, isSelected, onClick }: ITabMenuButton) => {
  return (
    <button
      className={isSelected ? indexButtonStyle['selected'] : indexButtonStyle['default']}
      onClick={onClick}
    >
      {idx + 1}
    </button>
  );
};
