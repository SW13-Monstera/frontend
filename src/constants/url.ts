const URL = {
  MAIN: '/',
  JOIN: '/join',
  NICKNAME: '/join/nickname',
  PROBLEM_LIST: '/problem/long',
  LONG_PROBLEM_DETAIL: '/problem/long/:id',
  LONG_PROBLEM_RESULT: '/problem/long/result/:id',
  SHORT_PROBLEM_DETAIL: '/problem/short/:id',
  SHORT_PROBLEM_RESULT: '/problem/short/result/:id',
  CALLBACK: '/callback',
};

const URLWithParam = {
  LONG_PROBLEM_DETAIL: (id: string) => `/problem/long/${id}`,
  LONG_PROBLEM_RESULT: (id: string) => `/problem/long/result/${id}`,
  SHORT_PROBLEM_DETAIL: (id: string) => `/problem/short/${id}`,
  SHORT_PROBLEM_RESULT: (id: string) => `/problem/short/result/${id}`,
};

export { URL, URLWithParam };
