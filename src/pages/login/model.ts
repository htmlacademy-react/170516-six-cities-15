import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '../../shared/types';
import {redirectToRoute, token} from '../../shared/utils';
import {Path} from '../../shared/config';

type AuthData = {
  email: string;
  password: string;
}

export const loginAction = createAsyncThunk<UserProps, AuthData, PromiseProps> (
  'pages/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserProps>('/login', {
      email,
      password,
    });
    token.save(data.token);
    dispatch(redirectToRoute(Path.Main));
    return data;
  }
);
