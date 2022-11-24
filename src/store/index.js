import customTaskReducer, { dismiss } from './slices/customTaskListState';

export const actions = {
  customTaskList: {
    dismiss,
  },
};

export const reducers = {
  customTaskList: customTaskReducer,
};
