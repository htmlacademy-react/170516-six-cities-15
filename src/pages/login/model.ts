import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserLoginProps} from '@/shared/types';
import {redirectToRoute, token} from '@/shared/utils';
import {Path} from '@/shared/config';
import {checkAuthAction} from '@/shared/api';

type AuthData = {
  email: string;
  password: string;
}

export const loginAction = createAsyncThunk<UserLoginProps, AuthData, PromiseProps> (
  'pages/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserLoginProps>('/login', {
      email,
      password,
    });
    token.save(data.token);
    dispatch(redirectToRoute(Path.Main));
    dispatch(checkAuthAction());
    return data;
  }
);
