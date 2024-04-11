import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {redirect} from '@/shared/utils';
import {createAPI} from '@/shared/api';
import {AppDispatch, TypeState} from '@/shared/types';
import {rootReducer} from '@/app/app-reducer';

export const api = createAPI();

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(redirect)
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;
