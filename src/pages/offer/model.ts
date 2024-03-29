import {createSelector, createSlice} from '@reduxjs/toolkit';
import {CommentsProps} from './type';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyAction, postReviewAction} from './api';
import {Status} from '../../shared/config';
import {PreviewCardProps, OfferProp, TypeState} from '../../shared/types';

type InitialStateProps = {
  statusOffer: null | Status;
  info: null | OfferProp;
  nearPlaces: PreviewCardProps[];
  comments: CommentsProps[];
}

const initialState: InitialStateProps = {
  statusOffer: null,
  info: null,
  nearPlaces: [],
  comments: []
};

export const currentOfferSlice = createSlice({
  name: 'currentOfferSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentOfferAction.fulfilled, (state, {payload}) => {
      state.statusOffer = Status.Resolved;
      state.info = payload;
    });
    builder.addCase(fetchCurrentOfferAction.pending, (state) => {
      state.statusOffer = Status.Loading;
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
  }
});

export const getOffer = createSelector(
  (state: TypeState) => state.currentOffers.info,
  (state) => state
);
export const getNearPlaces = (state: TypeState) => state.currentOffers.nearPlaces;
export const getComments = (state: TypeState) => state.currentOffers.comments;

export default currentOfferSlice.reducer;
