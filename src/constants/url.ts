const URL = {
  MAIN: '/',
  JOIN: '/join',
  NICKNAME: '/join/nickname',
  PROBLEM_LIST: '/problem',
  LONG_PROBLEM_DETAIL: '/problem/long/:id',
  LONG_PROBLEM_RESULT: '/problem/long/result/:id',
  SHORT_PROBLEM_DETAIL: '/problem/short/:id',
  SHORT_PROBLEM_RESULT: '/problem/short/result/:id',
  OAUTH_CALLBACK: '/oauth/redirect',
};

const URLWithParam = {
  LONG_PROBLEM_DETAIL: (id: string) => `/problem/long/${id}`,
  LONG_PROBLEM_RESULT: (id: string) => `/problem/long/result/${id}`,
  SHORT_PROBLEM_DETAIL: (id: string) => `/problem/short/${id}`,
  SHORT_PROBLEM_RESULT: (id: string) => `/problem/short/result/${id}`,
};

export { URL, URLWithParam };