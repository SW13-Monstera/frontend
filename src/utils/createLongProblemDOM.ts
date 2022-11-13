import { COLOR } from '../constants/color';
import { USER_ANSWER_DOM_ID } from '../constants/longProblem';
import { IkeywordResult, ILongProblemResultData } from '../types/api/problem';

const createKeywordIdxList = (keywords: IkeywordResult[]) => {
  const keywordIdxList =
    keywords
      .filter((e) => e.idx.length > 0)
      .map((keyword) => keyword.idx)
      .sort((a, b) => a[0] - b[0]) ?? [];

  let kcnt = 0;
  const refinedKeywordIdxList = keywordIdxList
    .map((_, idx) => {
      const kidx = idx + kcnt;
      if (
        idx !== keywordIdxList.length - 1 &&
        keywordIdxList[kidx][1] > keywordIdxList[kidx + 1][0]
      ) {
        kcnt++;
        return [
          Math.min(...keywordIdxList[kidx], ...keywordIdxList[kidx + 1]),
          Math.max(...keywordIdxList[kidx], ...keywordIdxList[kidx + 1]),
        ];
      } else {
        return keywordIdxList[kidx];
      }
    })
    .filter((e) => e);
  return refinedKeywordIdxList;
};

export const createUserAnswerDOM = (result: ILongProblemResultData | undefined) => {
  if (!result) return;

  const keywordIdxList = createKeywordIdxList(result.keywords);
  const userAnswerHTML =
    keywordIdxList.length > 0
      ? `<span>${result?.userAnswer.substring(0, keywordIdxList[0][0])}</span>` +
        keywordIdxList
          ?.map((keywordIdx, idx) =>
            idx !== keywordIdxList.length - 1
              ? `<span style="color: ${COLOR.PRIMARY}">${result?.userAnswer.substring(
                  keywordIdx[0],
                  keywordIdx[1] + 1,
                )}</span>` +
                `<span>${result?.userAnswer.substring(
                  keywordIdx[1] + 1,
                  keywordIdxList[idx + 1][0],
                )}</span>`
              : `<span style="color: ${COLOR.PRIMARY}">${result?.userAnswer.substring(
                  keywordIdx[0],
                  keywordIdx[1] + 1,
                )}</span>` + `<span>${result?.userAnswer.substring(keywordIdx[1] + 1)}</span>`,
          )
          .join('')
      : result?.userAnswer;
  document
    .getElementById(USER_ANSWER_DOM_ID)
    ?.insertAdjacentHTML('afterbegin', userAnswerHTML ?? '');
};
