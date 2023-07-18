import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filtersSlise.actions;
export const filterReduser = filtersSlise.reducer;
