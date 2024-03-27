const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const token = {
  get: () => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '',
  save: (tokenName: string) => localStorage.setItem(AUTH_TOKEN_KEY_NAME, tokenName),
  drop: () => localStorage.removeItem(AUTH_TOKEN_KEY_NAME),
};
