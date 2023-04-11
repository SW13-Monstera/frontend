import { ROLES } from "../constants";

export interface IUserInfo {
  accessToken: string;
  email: string;
  id: string;
  role: TROLE;
  username: string;
}

export interface IParsedToken {
  ROLE: string;
  exp: number;
  sub: string;
}

export type TROLE = typeof ROLES[keyof typeof ROLES];
