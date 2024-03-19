import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameCitiesProps} from '../../shared/types';
import {cities} from '../../shared/mock';

export const currentCitySlice = createSlice({
  name: 'entities/location',
  initialState: cities[0].name,
  reducers: {
    setCurrentCity: (_, {payload}: PayloadAction<NameCitiesProps>) => payload
  }
});

export const {setCurrentCity} = currentCitySlice.actions;
export default currentCitySlice.reducer;
