import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '@/shared/types';
import {redirectToRoute, token} from '@/shared/utils';
import {PATH_MAIN_PAGE} from '@/shared/config';
import {checkAuthAction} from '@/shared/api';

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
    dispatch(redirectToRoute(PATH_MAIN_PAGE));
    dispatch(checkAuthAction());
    return data;
  }
);
