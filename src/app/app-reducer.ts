import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../shared/mock';
import {NameCitiesProps} from '../shared/types';
import {setCurrentCity} from '../entities/locations/model';

type InitialStateProp = {
  currentCity: NameCitiesProps;
}

const initialState: InitialStateProp = {
  currentCity: cities[0].name,
};

//TODO: combineReducers ????
export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    });
});
