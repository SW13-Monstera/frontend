const API_URL = {
  JOIN: 'v1/auth/signup',
  LOGIN: '/v1/auth/login',
  REFRESH: '/v1/auth/refresh',
  PROBLEM_DETAIL: (problem_id: number) => `/v1/problems/${problem_id}`,
  PROBLEM_LIST: '/v1/problems',
  OAUTH_LOGIN: (oauth: string) => `/oauth2/authorization/${oauth}`,
  USER_INFO: '/v1/auth/info',
};

export { API_URL };
