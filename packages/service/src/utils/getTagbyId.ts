import { ITagBox } from './../types/tag';
import { TAG_MAP_BY_ID } from '../constants/tag';

export function getTagById(tagId: string): ITagBox {
  const tagValue = TAG_MAP_BY_ID.get(tagId);
  if (!tagValue) throw new Error('tag value 없음');
  return { name: tagValue.name, color: tagValue.color };
}
