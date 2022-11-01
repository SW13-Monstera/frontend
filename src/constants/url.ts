const URL = {
  MAIN: '/',
  JOIN: '/join',
  LOGIN: '/login',
  SEND_CHANGE_PASSWORD_EMAIL: '/change-password-email',
  CHANGE_PASSWORD: '/password-change/:code',
  CHANGE_PASSWORD_WITH_LOGIN: '/change-password',
  MYPAGE: '/mypage',
  USER_DATA_EDIT: '/mypage/edit',
  PROBLEM_LIST: '/problem',
  PROBLEM_SET_LIST: '/problem-set',
  LONG_PROBLEM_DETAIL: '/problem/long/:id',
  LONG_PROBLEM_RESULT: '/problem/long/result/:id',
  SHORT_PROBLEM_DETAIL: '/problem/short/:id',
  SHORT_PROBLEM_RESULT: '/problem/short/result/:id',
  MULTIPLE_PROBLEM_DETAIL: '/problem/multiple/:id',
  MULTIPLE__PROBLEM_RESULT: '/problem/multiple/result/:id',
  PROBLEM_SET_TEMPLATE: '/problem-set/:setId',
  PROBLEM_SET_DETAIL: '/problem-set/:setId/:id',
  OAUTH_CALLBACK: '/oauth/redirect',
  ERROR: '/error',
  PAGE_NOT_FOUND: '/page-not-found',
  TERMS_OF_SERVICE: '/terms-of-service',
  PRIVACY_POLICY: '/privacy-policy',
};

const URLWithParam = {
  LONG_PROBLEM_DETAIL: (id: number) => `/problem/long/${id}`,
  LONG_PROBLEM_RESULT: (id: number) => `/problem/long/result/${id}`,
  SHORT_PROBLEM_DETAIL: (id: number) => `/problem/short/${id}`,
  SHORT_PROBLEM_RESULT: (id: number) => `/problem/short/result/${id}`,
  MULTIPLE_PROBLEM_DETAIL: (id: number) => `/problem/multiple/${id}`,
  MULTIPLE_PROBLEM_RESULT: (id: number) => `/problem/multiple/result/${id}`,
  PROBLEM_SET_DETAIL: (setId: number, id: number) => `/problem-set/${setId}/${id}`,
};

export { URL, URLWithParam };
