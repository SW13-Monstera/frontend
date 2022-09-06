import { IDropdownElement } from '../types/util';

export const JOB: IDropdownElement[] = [
  { id: 'under-high-school', name: '고등학생 이하' },
  { id: 'undergraduate', name: '대학생' },
  { id: 'graduate', name: '대학원생' },
  { id: 'developer', name: '직장인(개발자)' },
  { id: 'not-developer', name: '직장인(비개발자)' },
  { id: 'independent', name: '무소속(취업준비생)' },
  { id: 'etc', name: '기타' },
];

export const CORE_TECH: IDropdownElement[] = [
  { id: 'reactJS', name: 'ReactJS' },
  { id: 'nodeJS', name: 'NodeJS' },
  { id: 'java', name: 'Java' },
];

export const JOB_OBJECTIVE: IDropdownElement[] = [
  { id: 'BACKEND', name: '서버/백엔드' },
  { id: 'FRONTEND', name: '프론트엔드' },
  { id: 'AI', name: '인공지능' },
];
