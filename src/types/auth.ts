import { ROLES } from '../constants/api';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IJoinRequest {
  email: string;
  username: string;
  password: string;
}

export interface IUserInfo {
  accessToken: string;
  email: string;
  id: string;
  role: typeof ROLES;
  username: string;
}

export interface IParsedToken {
  ROLE: string;
  exp: number;
  sub: string;
}
