import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '../../types';

export const checkAuthAction = createAsyncThunk<UserProps, undefined, PromiseProps>
('utils/checkAuth', async (_arg, {extra: api }) => {
  const { data } = await api.get<UserProps>('/login');
  return data;
});
