import { createSlice } from '@reduxjs/toolkit';

export const customTaskListSlice = createSlice({
  name: 'customTaskList',
  initialState: {
    isOpen: true,
  },
  reducers: {
    dismiss: (state) => {
      state.isOpen = false;
    },
  },
});

export const { dismiss } = customTaskListSlice.actions;
export default customTaskListSlice.reducer;
