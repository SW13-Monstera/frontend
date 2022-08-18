const API_URL = {
  JOIN: 'v1/auth/signup',
  LOGIN: '/v1/auth/login',
  REFRESH: '/v1/auth/refresh',
  PROBLEM_LIST: '/v1/problems',
  USER_INFO: '/v1/auth/info',
  USER_LIST: '/v1/users',
};

const API_URL_WITH_PARAMS = {
  USER_DETAIL: (user_id: string) => `/v1/users/${user_id}`,
  LONG_PROBLEM_DETAIL: (problem_id: string) => `/v1/problems/long/${problem_id}`,
  SHORT_PROBLEM_DETAIL: (problem_id: string) => `/v1/problems/short/${problem_id}`,
  MULTIPLE_PROBLEM_DETAIL: (problem_id: string) => `/v1/problems/multiple/${problem_id}`,
  UPDATE_USER: (user_id: string) => `/v1/users/${user_id}`,
};

export { API_URL, API_URL_WITH_PARAMS };
