import {createSelector, createSlice} from '@reduxjs/toolkit';
import {Status} from '@/shared/config';
import {PreviewOfferProps, OfferProp, TypeState} from '@/shared/types';
import {postFavoriteStatusAction} from '@/feature';
import {CommentsProps} from './type';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyAction, postReviewAction} from './api';

type InitialStateProps = {
  status: null | Status;
  info: null | OfferProp;
  nearPlaces: PreviewOfferProps[];
  comments: CommentsProps[];
}

const initialState: InitialStateProps = {
  status: null,
  info: null,
  nearPlaces: [],
  comments: []
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentOfferAction.fulfilled, (state, {payload}) => {
      state.status = Status.Resolved;
      state.info = payload;
    });
    builder.addCase(fetchCurrentOfferAction.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(fetchNearbyAction.fulfilled, (state, {payload}) => {
      state.nearPlaces = payload;
    });
    builder.addCase(fetchCommentsAction.fulfilled, (state, {payload}) => {
      state.comments = payload;
    });
    builder.addCase(postReviewAction.fulfilled, (state, {payload}) => {
      state.comments.push(payload);
    });
    builder.addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
      const {isFavorite} = action.payload;

      if (state.info) {
        state.info.isFavorite = isFavorite;
      }
    });
  }
});

export const getOffer = createSelector(
  (state: TypeState) => state.offer.info,
  (state) => state
);
export const getNearPlaces = (state: TypeState) => state.offer.nearPlaces;
export const getComments = (state: TypeState) => state.offer.comments;

export default offerSlice.reducer;
