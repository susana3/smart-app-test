import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FiltersState} from "../../types/types";


const initialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<FiltersState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;