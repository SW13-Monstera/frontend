import { IParsedToken } from 'auth/types';

export const parseJwt = (token: string) => {
  if (!token) return;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''),
  );
  const result = JSON.parse(jsonPayload) as IParsedToken;
  return result;
};
