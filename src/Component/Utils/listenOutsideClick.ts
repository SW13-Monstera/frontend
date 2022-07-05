import { RefObject } from 'react';
import { EVENT } from '../../constants';

export default function listenOutsideClick( //menuRef가 가르키는 dom요소(드롭다운)가 아닌 곳이 클릭되면 isOpen false로
  menuRef: RefObject<HTMLDivElement>,
  setIsOpen: (isOpen: boolean) => void,
) {
  return () => {
    if (!menuRef.current) return;

    [EVENT.CLICK, EVENT.TOUCHSTART].forEach((e) => {
      document.addEventListener(e, (event) => {
        const curr = menuRef.current;
        const target = event.target;
        if (curr?.contains(target as Node)) return;
        setIsOpen(false);
      });
    });
  };
}
