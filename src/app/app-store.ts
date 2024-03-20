import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import currentCitySliceReducer from '../entities/locations/model';
import {offersApi} from '../pages/main/api';

export const appStore = configureStore({
  reducer: {
    currentCity: currentCitySliceReducer,
    [offersApi.reducerPath]: offersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offersApi.middleware)
});

export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
