import { combineReducers } from '@reduxjs/toolkit';
import customTaskReducer, { dismiss } from './slices/customTaskListState';

export const actions = {
  customTaskList: {
    dismiss,
  },
};

export const reducers = combineReducers({
  customTaskList: customTaskReducer,
});
