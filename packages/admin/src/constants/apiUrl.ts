const API_URL = {
  LOGIN: '/v1/auth/login',
  REFRESH: '/v1/auth/refresh',
  LONG_PROBLEM_LIST: '/admin/problems/long',
  LONG_PROBLEM_CREATE: '/admin/problems/long',
  SHORT_PROBLEM_LIST: '/admin/problems/short',
  SHORT_PROBLEM_CREATE: '/admin/problems/short',
  MULTIPLE_PROBLEM_LIST: '/admin/problems/multiple',
  MULTIPLE_PROBLEM_CREATE: '/admin/problems/multiple',
  PROBLEM_SEARCH: '/v1/problems',
  PROBLEM_SET_LIST: '/v1/problem-sets',
  PROBLEM_SET_LIST_CREATE: '/admin/problem-sets',
  USER_DETAIL: '',
  USER_LIST: '/v1/users',
  NOTICE: '/admin/notification',
  NOTICES: 'admin/notifications',
};

const API_URL_WITH_PARAMS = {
  LONG_PROBLEM_DETAIL: (problem_id: string) => `/admin/problems/long/${problem_id}`,
  LONG_PROBLEM_UPDATE: (problem_id: string) => `/admin/problems/long/${problem_id}`,
  MULTIPLE_PROBLEM_DETAIL: (problem_id: string) => `/admin/problems/multiple/${problem_id}`,
  MULTIPLE_PROBLEM_UPDATE: (problem_id: string) => `/admin/problems/multiple/${problem_id}`,
  SHORT_PROBLEM_DETAIL: (problem_id: string) => `/admin/problems/short/${problem_id}`,
  SHORT_PROBLEM_UPDATE: (problem_id: string) => `/admin/problems/short/${problem_id}`,
};

export { API_URL, API_URL_WITH_PARAMS };
