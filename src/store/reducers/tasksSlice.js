import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleTask: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice;
