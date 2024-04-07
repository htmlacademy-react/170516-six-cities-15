import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '@/shared/types';
import {token} from '../../utils/token';

export const checkAuthAction = createAsyncThunk<UserProps, undefined, PromiseProps>
('user/checkAuth', async (_arg, {extra: api }) => {
  const { data } = await api.get<UserProps>('/login');
  return data;
});

export const logoutAction = createAsyncThunk<void, void, PromiseProps> (
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    token.drop();
  }
);
