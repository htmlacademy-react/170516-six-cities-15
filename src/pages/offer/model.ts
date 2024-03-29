import {createSlice} from '@reduxjs/toolkit';
import {CommentsProps, OfferProp} from './type';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyAction, postReviewAction} from './api';
import {Status} from '../../shared/config';
import {PreviewCardProps} from '../../shared/types';

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

export default currentOfferSlice.reducer;
