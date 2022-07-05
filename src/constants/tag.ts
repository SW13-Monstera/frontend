const TAGLIST = {
  category: {
    name: '카테고리',
    type: [
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
  isSolved: {
    name: '풀이 여부',
    type: [
      {
        id: 'true',
        name: '푼 문제',
      },
      {
        id: 'false',
        name: '안 푼 문제',
      },
    ],
  },
  problemKit: {
    name: '문제 kit',
    type: [
      {
        id: 'ds-1',
        name: '자료구조 완벽정리 1',
      },
      {
        id: 'ds-2',
        name: '자료구조 완벽정리 2',
      },
      {
        id: 'ds-3',
        name: '자료구조 완벽정리 3',
      },
    ],
  },
};

const TAGTYPELIST = ['category', 'isSolved', 'problemKit'] as const;

export { TAGLIST, TAGTYPELIST };
