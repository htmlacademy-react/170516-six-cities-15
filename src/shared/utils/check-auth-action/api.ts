import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '../../types';
import {Path} from '../../config';
import {redirectToRoute} from '../redirect-to-route';
import {token} from '../token';

export const checkAuthAction = createAsyncThunk<UserProps, undefined, PromiseProps>
('user/checkAuth', async (_arg, {extra: api }) => {
  const { data } = await api.get<UserProps>('/login');
  return data;
});

export const logoutAction = createAsyncThunk<void, void, PromiseProps> (
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(redirectToRoute(Path.Login));
    await api.delete('/logout');
    token.drop();
  }
);
