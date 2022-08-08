const TAGLIST = [
  {
    name: '카테고리',
    elements: [
      {
        id: 'nt',
        name: '네트워크',
      },
      {
        id: 'os',
        name: '운영체제',
      },
      {
        id: 'db',
        name: '데이터베이스',
      },
      {
        id: 'ds',
        name: '자료구조',
      },
    ],
  },
  {
    name: '문제 유형',
    elements: [
      {
        id: 'long',
        name: '서술형',
      },
      {
        id: 'short',
        name: '단답형',
      },
      {
        id: 'multiple',
        name: '객관식',
      },
    ],
  },
  {
    name: '풀이 여부',
    elements: [
      {
        id: 'solved',
        name: '푼 문제',
      },
      {
        id: 'unsolved',
        name: '안 푼 문제',
      },
    ],
  },
  {
    name: '채점 가능 여부',
    elements: [
      {
        id: 'gradeable',
        name: '채점 가능',
      },
      {
        id: 'ungradable',
        name: '채점 불가능',
      },
    ],
  },
];

export { TAGLIST };
