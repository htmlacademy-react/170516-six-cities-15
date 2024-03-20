import {createSlice} from '@reduxjs/toolkit';
import {Status} from '../../shared/config';
import {fetchOffersAction} from './api';

type initialState = {
  offers: [];
  status: null | string;
  error: null;
};

const initialState: initialState = {
  offers: [],
  status: null,
  error: null,
};

export const offersSlice = createSlice({
  name: 'pages/main',
  initialState: initialState,
  reducers: {
    addOffers: (state, {payload}) => {
      state.offers = payload as [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.fulfilled, (state) => {
      state.status = Status.Resolved;
    });
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.status = Status.Loading;
      state.error = null;
    });
  }
});

export const {addOffers} = offersSlice.actions;
export default offersSlice.reducer;
