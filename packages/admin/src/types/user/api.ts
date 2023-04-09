import { ROLES } from 'auth/constants';

export interface IUserListResponseData {
  id: string;
  email: string;
  username: string;
  role: typeof ROLES;
}

export interface IUserListRequestParams {
  page: number;
}

export interface INotice {
  content: string;
  userId: string;
  link: string;
}
