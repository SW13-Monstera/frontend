import { IOption } from '../types/select';

export const JOB: IOption[] = [
  { value: 'under-high-school', label: '고등학생 이하' },
  { value: 'undergraduate', label: '대학생' },
  { value: 'graduate', label: '대학원생' },
  { value: 'developer', label: '직장인(개발자)' },
  { value: 'not-developer', label: '직장인(비개발자)' },
  { value: 'independent', label: '무소속(취업준비생)' },
  { value: 'etc', label: '기타' },
];

export const CORE_TECH: IOption[] = [
  { value: 'reactJS', label: 'ReactJS' },
  { value: 'nodeJS', label: 'NodeJS' },
  { value: 'java', label: 'Java' },
];

export const JOB_OBJECTIVE: IOption[] = [
  { value: 'BACKEND', label: '서버/백엔드' },
  { value: 'FRONTEND', label: '프론트엔드' },
  { value: 'FULLSTACK', label: '웹 풀스택' },
  { value: 'ANDROvalue', label: '안드로이드 앱' },
  { value: 'ML', label: '머신러닝' },
  { value: 'IOS', label: '아이폰 앱' },
  { value: 'AI', label: '인공지능(AI)' },
  { value: 'DATA_ENGINEER', label: '데이터 엔지니어' },
  { value: 'DBA', label: 'DBA' },
  { value: 'MOBLIE_GAME', label: '모바일 게임' },
  { value: 'GAME_CLIENT', label: '게임 클라이언트' },
  { value: 'GAME_SERVER', label: '게임 서버' },
  { value: 'SYSTEM', label: '시스템/네트워크' },
  { value: 'SYSTEM_SOFTWARE', label: '시스템 소프트웨어' },
  { value: 'DEVOPS', label: '데브옵스' },
  { value: 'SECURITY', label: '인터넷 보안' },
  { value: 'EMBEDDED', label: '임베디드 소프트웨어' },
  { value: 'ROBOTICS', label: '로보틱스 미들웨어' },
  { value: 'QA', label: 'QA' },
  { value: 'IOT', label: '사물인터넷(IoT)' },
  { value: 'APPLICATION', label: '응용 프로그램' },
  { value: 'BLOCKCHAIN', label: '블록체인' },
];
