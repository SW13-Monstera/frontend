const URL = {
  LOGIN: '/',
  LONG_PROBLEM_LIST: '/problem/long',
  SHORT_PROBLEM_LIST: '/problem/short',
  MULTIPLE_PROBLEM_LIST: '/problem/multiple',
  LONG_PROBLEM_DETAIL: '/problem/long/:id',
  LONG_PROBLEM_ADD: '/problem/long/add',
  LONG_PROBLEM_EDIT: '/problem/long/edit/:id',
  SHORT_PROBLEM_DETAIL: '/problem/short/:id',
  SHORT_PROBLEM_ADD: '/problem/short/add',
  SHORT_PROBLEM_EDIT: '/problem/short/edit/:id',
  PROBLEM_SET_LIST: '/problem/problem-set',
  PROBLEM_SET_ADD: '/problem/problem-set/add',
  MULTIPLE_PROBLEM_DETAIL: '/problem/multiple/:id',
  MULTIPLE_PROBLEM_ADD: '/problem/multiple/add',
  MULTIPLE_PROBLEM_EDIT: '/problem/multiple/edit/:id',
  DASHBOARD: '/dashboard',
  USER: '/user',
  NOTICE_CREATE: '/notice/create',
};

const URLWithParam = {
  LONG_PROBLEM_DETAIL: (id: string) => `/problem/long/${id}`,
  LONG_PROBLEM_EDIT: (id: string) => `/problem/long/edit/${id}`,
  SHORT_PROBLEM_DETAIL: (id: string) => `/problem/short/${id}`,
  SHORT_PROBLEM_EDIT: (id: string) => `/problem/short/edit/${id}`,
  MULTIPLE_PROBLEM_DETAIL: (id: string) => `/problem/multiple/${id}`,
  MULTIPLE_PROBLEM_EDIT: (id: string) => `/problem/multiple/edit/${id}`,
};

export { URL, URLWithParam };
