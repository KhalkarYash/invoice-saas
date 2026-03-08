let accessToken: string | null = null;
let refreshToken: string | null = null;

export const setTokens = (access: string, refresh?: string) => {
  accessToken = access;
  if (refresh) refreshToken = refresh;
};

export const getAccessToken = () => accessToken;

export const getRefreshToken = () => refreshToken;
