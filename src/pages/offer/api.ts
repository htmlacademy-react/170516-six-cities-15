import {createAsyncThunk} from '@reduxjs/toolkit';
import {CommentsProps} from './type';
import {ExtraType, OfferProp, PreviewOfferProps} from '../../shared/types';

type PostCommentsProps = {
  id: string;
  rating: number;
  comment: string;
};

export const fetchCurrentOfferAction = createAsyncThunk<OfferProp, OfferProp['id'], ExtraType>('offers/fetchOffer', async (id, {extra: api }) => {
  const { data } = await api.get<OfferProp>(`/offers/${id}`);
  return data;
});

export const fetchNearbyAction = createAsyncThunk<PreviewOfferProps[], PreviewOfferProps['id'], ExtraType>('offers/fetchNearby', async (id, {extra: api }) => {
  const { data } = await api.get<PreviewOfferProps[]>(`/offers/${id}/nearby`);
  return data;
});

export const fetchCommentsAction = createAsyncThunk<CommentsProps[], CommentsProps['id'], ExtraType>('offer/comments', async (id, {extra: api }) => {
  const { data } = await api.get<CommentsProps[]>(`/comments/${id}`);
  return data;
});

export const postReviewAction = createAsyncThunk<CommentsProps, PostCommentsProps, ExtraType>(
  'offers/postReview',
  async ({id, rating, comment}, {extra: api}) => {
    const {data} = await api.post<CommentsProps>(`/comments/${id}`, {comment, rating});
    return data;
  },
);
