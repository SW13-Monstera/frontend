import { ITagBox } from './../types/tag';
import { getTagValue } from '../constants/tag';

export function getTagById(tagId: string): ITagBox {
  const tagValue = getTagValue(tagId);
  if (!tagValue) throw new Error('tag value 없음');
  return { name: tagValue.name, color: tagValue.color };
}
