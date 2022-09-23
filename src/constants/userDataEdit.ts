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
  { id: 'FULLSTACK', name: '웹 풀스택' },
  { id: 'ANDROID', name: '안드로이드 앱' },
  { id: 'ML', name: '머신러닝' },
  { id: 'IOS', name: '아이폰 앱' },
  { id: 'AI', name: '인공지능(AI)' },
  { id: 'DATA_ENGINEER', name: '데이터 엔지니어' },
  { id: 'DBA', name: 'DBA' },
  { id: 'MOBLIE_GAME', name: '모바일 게임' },
  { id: 'GAME_CLIENT', name: '게임 클라이언트' },
  { id: 'GAME_SERVER', name: '게임 서버' },
  { id: 'SYSTEM', name: '시스템/네트워크' },
  { id: 'SYSTEM_SOFTWARE', name: '시스템 소프트웨어' },
  { id: 'DEVOPS', name: '데브옵스' },
  { id: 'SECURITY', name: '인터넷 보안' },
  { id: 'EMBEDDED', name: '임베디드 소프트웨어' },
  { id: 'ROBOTICS', name: '로보틱스 미들웨어' },
  { id: 'QA', name: 'QA' },
  { id: 'IOT', name: '사물인터넷(IoT)' },
  { id: 'APPLICATION', name: '응용 프로그램' },
  { id: 'BLOCKCHAIN', name: '블록체인' },
];
