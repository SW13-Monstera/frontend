import { ITableHead } from '../types/etc';

export const longProblemTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'Problem ID',
  },
  {
    id: 'title',
    name: '문제 제목',
  },
  {
    id: 'creator',
    name: '제작자',
  },
  {
    id: 'avgKeywordScore',
    name: '평균 키워드 점수',
  },
  {
    id: 'avgContentScore',
    name: '평균 내용 점수',
  },
  {
    id: 'userAnswerCnt',
    name: '답변 수',
  },
  {
    id: 'isActive',
    name: '활성화 여부',
  },
];

export const multipleTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'Problem ID',
  },
  {
    id: 'title',
    name: '문제 제목',
  },
  {
    id: 'creator',
    name: '제작자',
  },
  {
    id: 'answerRate',
    name: '정답률',
  },

  {
    id: 'userAnswerCnt',
    name: '답변 수',
  },
  {
    id: 'isActive',
    name: '활성화 여부',
  },
];

export const shortTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'Problem ID',
  },
  {
    id: 'title',
    name: '문제 제목',
  },
  {
    id: 'creator',
    name: '제작자',
  },
  {
    id: 'answerRate',
    name: '정답률',
  },

  {
    id: 'userAnswerCnt',
    name: '답변 수',
  },
  {
    id: 'isActive',
    name: '활성화 여부',
  },
];

export const validatingDataTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'Data ID',
  },
  {
    id: 'problemTitle',
    name: '문제 제목',
  },
  {
    id: 'assignedUsername',
    name: '담당자',
  },
  {
    id: 'updatedAt',
    name: '완료된 시간',
  },
];

export const labelingDataTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'Data ID',
  },
  {
    id: 'problemTitle',
    name: '문제 제목',
  },
  {
    id: 'assignedUsername',
    name: '담당자',
  },
  {
    id: 'updatedAt',
    name: '생성 시간',
  },
];

export const doneDataTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'Data ID',
  },
  {
    id: 'problemTitle',
    name: '문제 제목',
  },
  {
    id: 'validatingUsername',
    name: '검수자',
  },
  {
    id: 'assignedUsername',
    name: '담당자',
  },
  {
    id: 'updatedAt',
    name: '완료된 시간',
  },
];

export const userTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: 'User ID',
  },
  {
    id: 'email',
    name: '이메일',
  },
  {
    id: 'username',
    name: '닉네임',
  },
  {
    id: 'role',
    name: '권한',
  },
];

export const problemSetTableHeads: ITableHead[] = [
  {
    id: 'id',
    name: '문제 세트 ID',
  },
  {
    id: 'problemCnt',
    name: '문제 개수',
  },
  {
    id: 'name',
    name: '제목',
  },
  {
    id: 'description',
    name: '설명',
  },
];
