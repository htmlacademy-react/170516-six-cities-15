const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const token = {
  get: () => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '',
  save: (token: string) => localStorage.setItem(AUTH_TOKEN_KEY_NAME, token),
  drop: () => localStorage.removeItem(AUTH_TOKEN_KEY_NAME),
};
