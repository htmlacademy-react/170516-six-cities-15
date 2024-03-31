import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '@/shared/types';
import {Path} from '@/shared/config';
import {redirectToRoute} from '../../utils/redirect-to-route';
import {token} from '../../utils/token';

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
