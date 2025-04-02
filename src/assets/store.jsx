import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./ReduxSlice"; 

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
