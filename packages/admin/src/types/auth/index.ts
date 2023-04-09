export interface IUserInfo {
  accessToken: string;
  email: string;
  id: string;
  role: string;
  username: string;
}

export interface IParsedToken {
  ROLE: string;
  exp: number;
  sub: string;
}
