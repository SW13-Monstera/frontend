export interface IUpdateUserRequest {
  profileImageUrl?: string | null;
  username?: string | null;
  password?: string | null;
  major?: string | null;
  job?: string | null;
  jobObjective?: string | null;
  techs?: string[];
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  profileImgUrl?: string | null;
}

export interface IProfileData {
  id: string;
  email: string;
  username: string;
  role: string;
  major: string;
  job: string;
  jobObjective: string;
  techs: string[];
  githubUrl: string;
  linkedinUrl: string;
  profileImgUrl: string;
}
