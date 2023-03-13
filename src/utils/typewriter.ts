import { RefObject } from 'react';

export function typewriter(ref: RefObject<HTMLParagraphElement>, text: string | undefined) {
  const speed = 100;
  let curIdx = 0;

  function write() {
    if (!text || !ref.current) return;

    ref.current.innerHTML = text.substring(0, curIdx) + '|';
    if (curIdx++ === text.length) {
      curIdx = 0;
    } else {
      setTimeout(() => {
        write();
      }, speed);
    }
  }

  write();
}
