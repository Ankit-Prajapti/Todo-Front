import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todoSlicer.js";
export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
