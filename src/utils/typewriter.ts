import { RefObject } from 'react';
export function typewriter(ref: RefObject<HTMLParagraphElement>, text: string | undefined) {
  if (!text) return;

  const textArr = new Array(text);
  const iSpeed = 100;
  let iIndex = 0;
  let iArrLength = textArr[0].length;
  const iScrollAt = 20;

  let iTextPos = 0;
  let sContents = '';
  let iRow;

  function write() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);

    while (iRow < iIndex) {
      sContents += textArr[iRow++] + '<br />';
    }
    if (!ref.current) return;
    ref.current.innerHTML = sContents + textArr[iIndex].substring(0, iTextPos) + '|';
    if (iTextPos++ === iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex !== textArr.length) {
        iArrLength = textArr[iIndex].length;
        setTimeout(() => {
          write();
        }, 500);
      }
    } else {
      setTimeout(() => {
        write();
      }, iSpeed);
    }
  }
  write();
}
