import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI, requireAuthorizationSlice} from '../shared/utils';
import currentCitySliceReducer from '../entities/locations/model';
import offersSliceReducer from '../pages/main/model';

export const api = createAPI();

export const appStore = configureStore({
  reducer: {
    currentCity: currentCitySliceReducer,
    offers: offersSliceReducer,
    client: requireAuthorizationSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  })
});

//TODO: Вынести в типы
export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
