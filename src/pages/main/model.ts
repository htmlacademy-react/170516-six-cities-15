import {createSlice} from '@reduxjs/toolkit';
import {Status} from '../../shared/config';
import {fetchOffersAction} from './api';

type initialState = {
  offerList: [];
  status: null | string;
};

const initialState: initialState = {
  offerList: [],
  status: null,
};

export const offersSlice = createSlice({
  name: 'pages/main',
  initialState: initialState,
  reducers: {
    addOffers: (state, {payload}) => {
      state.offerList = payload as [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.fulfilled, (state) => {
      state.status = Status.Resolved;
    });
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.status = Status.Loading;
    });
  }
});

export const {addOffers} = offersSlice.actions;
export default offersSlice.reducer;
