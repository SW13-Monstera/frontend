export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IJoinRequest {
  email: string;
  username: string;
  password: string;
}

export interface IChangePassword {
  code: string;
  password: string;
}
