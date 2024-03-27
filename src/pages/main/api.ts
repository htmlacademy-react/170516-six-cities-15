import {createAsyncThunk} from '@reduxjs/toolkit';
import {ExtraType, PreviewCardProps} from '../../shared/types';

export const fetchOffersAction = createAsyncThunk<
  PreviewCardProps[],
  void,
  ExtraType
>('pages/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<PreviewCardProps[]>('/offers');
  return data;
});


