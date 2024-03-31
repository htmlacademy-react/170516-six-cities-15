import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CityName} from '@/shared/config';

export const citySlice = createSlice({
  name: 'city',
  initialState: CityName.Paris,
  reducers: {
    setCity: (_, {payload}: PayloadAction<CityName>) => payload
  }
});

export const {setCity} = citySlice.actions;
export default citySlice.reducer;
