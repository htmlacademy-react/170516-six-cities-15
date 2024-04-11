import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps} from '@/shared/types';
import {token} from '@/shared/utils';

export const logoutAction = createAsyncThunk<void, void, PromiseProps> (
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    token.drop();
  }
);
