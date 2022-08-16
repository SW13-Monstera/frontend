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

export const getFilterParams = (checkedTags: Set<ITagState>) => {
  const checkedTagsArray = Array.from(checkedTags);

  const categoryTagIds = TAGLIST.find((e) => e.name === '카테고리')?.elements.map((e) => e.id);
  const solveTagIds = TAGLIST.find((e) => e.name === '풀이 여부')?.elements.map((e) => e.id);
  const typeIds = TAGLIST.find((e) => e.name === '문제 유형')?.elements.map((e) => e.id);
  const gradableIds = TAGLIST.find((e) => e.name === '채점 가능 여부')?.elements.map((e) => e.id);

  const isSolved = checkedTagsArray.filter(({ id }) => solveTagIds?.includes(id));
  const isSolvedParam = isSolved.length === 1 ? isSolvedMap[isSolved[0].id] : null;
  const query = (document.getElementById('search-problem') as HTMLInputElement).value;
  const tags = checkedTagsArray.filter(({ id }) => categoryTagIds?.includes(id)).map((e) => e.id);
  const type = checkedTagsArray.filter(({ id }) => typeIds?.includes(id)).map((e) => e.id);
  const isGradable = checkedTagsArray.filter(({ id }) => gradableIds?.includes(id));
  const isGradableParam = isGradable.length === 1 ? isGradableMap[isGradable[0].id] : null;

  const params: IProblemRequestParam = {
    isSolved: isSolvedParam,
    tags: tags.join(','),
    query: query,
    type: type.join(','),
    isGradable: isGradableParam,
  };

  return params;
};
