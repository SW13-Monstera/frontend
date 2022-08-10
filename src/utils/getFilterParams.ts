import { TAGLIST } from '../constants';
import { IProblemRequestParam } from '../types/api/problem';
import { ITag } from '../types/problem';

const isSolvedMap: Record<string, boolean> = {
  solved: true,
  unsolved: false,
};

export const getFilterParams = (checkedTags: Set<ITag>) => {
  const checkedTagsArray = Array.from(checkedTags);

  const categoryTagIds = TAGLIST.find((e) => e.name === '카테고리')?.elements.map((e) => e.id);
  const solveTagIds = TAGLIST.find((e) => e.name === '풀이 여부')?.elements.map((e) => e.id);

  const isSolved = checkedTagsArray.filter(({ id }) => solveTagIds?.includes(id));
  const isSolvedParam = isSolved.length === 1 ? isSolvedMap[isSolved[0].id] : null;
  const query = (document.getElementById('search-problem') as HTMLInputElement).value;
  const tags = checkedTagsArray.filter(({ id }) => categoryTagIds?.includes(id)).map((e) => e.id);

  const params: IProblemRequestParam = {
    isSolved: isSolvedParam,
    tags: tags.join(','),
    query: query,
  };

  return params;
};
