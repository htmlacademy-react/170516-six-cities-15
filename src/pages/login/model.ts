import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserProps} from '../../shared/types';
import {Token} from '../../shared/utils';


type AuthData = {
  email: string;
  password: string;
}

export const loginAction = createAsyncThunk<UserProps, AuthData, PromiseProps> (
  'pages/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserProps>('/login', {
      email,
      password,
    });
    Token.Save(data.token);
    return data;
  }
);
