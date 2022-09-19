import { ITagBox } from '../types/tag';
import { IDropdownElement } from '../types/util';
import { PROBLEM_TYPE } from './problem';

interface IDropdownElementWithColor extends IDropdownElement {
  color: 'color1' | 'color2' | 'color3' | 'color4';
}

interface ITagListElement {
  name: string;
  elements: IDropdownElementWithColor[];
}

const TAGLIST: ITagListElement[] = [
  {
    name: '카테고리',
    elements: [
      {
        id: 'network',
        name: '네트워크',
        color: 'color1',
      },
      {
        id: 'os',
        name: '운영체제',
        color: 'color1',
      },
      {
        id: 'db',
        name: '데이터베이스',
        color: 'color1',
      },
      {
        id: 'ds',
        name: '자료구조',
        color: 'color1',
      },
    ],
  },
  {
    name: '문제 유형',
    elements: [
      {
        id: PROBLEM_TYPE.LONG,
        name: '서술형',
        color: 'color2',
      },
      {
        id: PROBLEM_TYPE.SHORT,
        name: '단답형',
        color: 'color2',
      },
      {
        id: PROBLEM_TYPE.MULTIPLE,
        name: '객관식',
        color: 'color2',
      },
    ],
  },
  {
    name: '풀이 여부',
    elements: [
      {
        id: 'solved',
        name: '푼 문제',
        color: 'color3',
      },
      {
        id: 'unsolved',
        name: '안 푼 문제',
        color: 'color3',
      },
    ],
  },
  {
    name: '채점 가능 여부',
    elements: [
      {
        id: 'gradeable',
        name: '채점 가능',
        color: 'color4',
      },
      {
        id: 'ungradable',
        name: '채점 불가능',
        color: 'color4',
      },
    ],
  },
];

const TAG_MAP_BY_ID: Map<string, ITagBox> = new Map();
TAGLIST.map((tagType) =>
  tagType.elements.map((tagElement) =>
    TAG_MAP_BY_ID.set(tagElement.id, {
      name: tagElement.name,
      color: tagElement.color ?? 'color1',
    }),
  ),
);

export { TAGLIST, TAG_MAP_BY_ID };
