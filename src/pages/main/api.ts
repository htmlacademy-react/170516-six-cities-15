import {createAsyncThunk} from '@reduxjs/toolkit';
import {PlacesProps} from './ui/places/type';
import {ExtraType} from '../../shared/types';
import {addOffers} from './model';

export const fetchOffersAction = createAsyncThunk<
  PlacesProps[],
  void,
  ExtraType
>('pages/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<PlacesProps[]>('/offers');
  dispatch(addOffers(data));
  return data;
});


