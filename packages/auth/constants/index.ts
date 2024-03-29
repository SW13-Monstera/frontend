export const USER_INFO = 'userInfo';
export const AUTHORIZATION = 'Authorization';
export const BEARER_TOKEN = (token: string) => `Bearer ${token}`;
export const ROLES = {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_USER: 'ROLE_USER',
} as const;
