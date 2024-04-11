import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserLoginProps} from '@/shared/types';

export const checkAuthAction = createAsyncThunk<UserLoginProps, undefined, PromiseProps>
('user/checkAuth', async (_arg, {extra: api }) => {
  const { data } = await api.get<UserLoginProps>('/login');
  return data;
});
