const API_URL = {
  JOIN: 'v1/auth/signup',
  LOGIN: '/v1/auth/login',
  REFRESH: '/v1/auth/refresh',
  PROBLEM_DETAIL: (problem_id: number) => `/v1/problems/${problem_id}`,
  PROBLEM_LIST: '/v1/problems',
  OAUTH_LOGIN: (oauth: string) => `/oauth2/authorization/${oauth}`,
  USER_INFO: '/v1/auth/info',
  UPDATE_USER: `/v1/users`,
  USER_LIST: '/v1/users',
  USER_DETAIL: (user_id: string) => `/v1/users/${user_id}`,
};

export { API_URL };
