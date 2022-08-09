const API_URL = {
  JOIN: 'v1/auth/signup',
  LOGIN: '/v1/auth/login',
  REFRESH: '/v1/auth/refresh',
  PROBLEM_DETAIL: (problem_id: number) => `/v1/problems/${problem_id}`,
  PROBLEM_LIST: '/v1/problems',
};

const GITHUB_API_URL = {
  GITHUB_LOGIN: `/oauth/authorize`,
  GITHUB_REDIRECT: `/oauth/access_token`,
};

export { API_URL, GITHUB_API_URL };
