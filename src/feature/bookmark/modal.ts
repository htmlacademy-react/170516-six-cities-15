import {createAsyncThunk} from '@reduxjs/toolkit';
import {ExtraType, OfferProp} from '@/shared/types';

type FavoriteData = {
  id: string;
  status: number;
}

export const postFavoriteStatusAction = createAsyncThunk<OfferProp, FavoriteData, ExtraType>(
  'feature/postFavorite',
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<OfferProp>(`/favorite/${id}/${status}`);
    return data;
  }
);
