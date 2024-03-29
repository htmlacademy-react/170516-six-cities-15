import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CityName} from '../../shared/config';

export const currentCitySlice = createSlice({
  name: 'currentCitySlice',
  initialState: CityName.Paris,
  reducers: {
    setCurrentCity: (_, {payload}: PayloadAction<CityName>) => payload
  }
});

export const {setCurrentCity} = currentCitySlice.actions;
export default currentCitySlice.reducer;
