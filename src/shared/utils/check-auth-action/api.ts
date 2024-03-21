import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '../../types';
import {setRequireAuth} from './model';

export const checkAuthAction = createAsyncThunk<UserProps, undefined, PromiseProps>
('utils/checkAuth', async (_arg, {dispatch, extra: api }) => {
  const { data } = await api.get<UserProps>('/login');
  dispatch(setRequireAuth(data));
  return data;
});
