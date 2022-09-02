const URL = {
  MAIN: '/',
  JOIN: '/join',
  LOGIN: '/login',
  NICKNAME: '/join/nickname',
  MYPAGE: '/mypage',
  USER_DATA_EDIT: '/mypage/edit',
  PROBLEM_LIST: '/problem',
  LONG_PROBLEM_DETAIL: '/problem/long/:id',
  LONG_PROBLEM_RESULT: '/problem/long/result/:id',
  SHORT_PROBLEM_DETAIL: '/problem/short/:id',
  SHORT_PROBLEM_RESULT: '/problem/short/result/:id',
  MULTIPLE_PROBLEM_DETAIL: '/problem/multiple/:id',
  MULTIPLE__PROBLEM_RESULT: '/problem/multiple/result/:id',
  OAUTH_CALLBACK: '/oauth/redirect',
  ERROR: '/error',
};

const URLWithParam = {
  LONG_PROBLEM_DETAIL: (id: number) => `/problem/long/${id}`,
  LONG_PROBLEM_RESULT: (id: number) => `/problem/long/result/${id}`,
  SHORT_PROBLEM_DETAIL: (id: number) => `/problem/short/${id}`,
  SHORT_PROBLEM_RESULT: (id: number) => `/problem/short/result/${id}`,
  MULTIPLE_PROBLEM_DETAIL: (id: number) => `/problem/multiple/${id}`,
  MULTIPLE_PROBLEM_RESULT: (id: number) => `/problem/multiple/result/${id}`,
};

export { URL, URLWithParam };
