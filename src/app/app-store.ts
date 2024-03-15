import { configureStore } from '@reduxjs/toolkit';
import { appReducer} from './app-reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const appStore = configureStore({
  reducer: appReducer
});

export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
