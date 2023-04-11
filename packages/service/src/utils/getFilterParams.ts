import { ITagState } from './../types/tag';
import { TAGLIST } from '../constants';
import { IProblemRequestParam } from '../types/api/problem';

const isSolvedMap: Record<string, boolean> = {
  solved: true,
  unsolved: false,
};

const isGradableMap: Record<string, boolean> = {
  gradeable: true,
  ungradable: false,
};

const isTagSelected = (checkedTags: ITagState[], array: string[]) => {
  return checkedTags.filter((e) => array.includes(e.id) && e.isChecked).map((e) => e.id);
};

export const getFilterParams = (checkedTags: ITagState[]) => {
  const categoryTagIds = TAGLIST.find((e) => e.name === '카테고리')?.elements.map((e) => e.id);
  const typeIds = TAGLIST.find((e) => e.name === '문제 유형')?.elements.map((e) => e.id);
  const solveTagIds = TAGLIST.find((e) => e.name === '풀이 여부')?.elements.map((e) => e.id);
  const gradableIds = TAGLIST.find((e) => e.name === '채점 가능 여부')?.elements.map((e) => e.id);

  if (!categoryTagIds || !solveTagIds || !typeIds || !gradableIds) return;

  const query = (document.getElementById('search-problem') as HTMLInputElement).value;
  const tags = isTagSelected(checkedTags, categoryTagIds);
  const type = isTagSelected(checkedTags, typeIds);
  const isSolved = isTagSelected(checkedTags, solveTagIds);
  const isSolvedParam = isSolved.length === 1 ? isSolvedMap[isSolved[0]] : null;
  const isGradable = isTagSelected(checkedTags, gradableIds);
  const isGradableParam = isGradable.length === 1 ? isGradableMap[isGradable[0]] : null;

  const params: IProblemRequestParam = {
    query: query,
    tags: tags.join(','),
    type: type.join(','),
    isSolved: isSolvedParam,
    isGradable: isGradableParam,
  };

  return params;
};
