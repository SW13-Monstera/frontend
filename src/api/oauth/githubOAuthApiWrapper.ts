import { GITHUB_API_URL } from '../../constants/apiUrl';
import githubApiClient from './githubApiClient';

export const githubOAuthApiWrapper = {
  githubLogin: () => {
    const params = { client_id: import.meta.env.VITE_CLIENT_ID };
    return (
      githubApiClient.get(GITHUB_API_URL.GITHUB_LOGIN),
      {
        params: params,
      }
    );
  },

  githubRedirect: (code: string) => {
    const data = {
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      code: code,
    };
    return githubApiClient.post(GITHUB_API_URL.GITHUB_REDIRECT, data);
  },
};
