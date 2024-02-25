import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./features/links";
import userReducer from "./features/user";
export const store = configureStore({
  reducer: {
    links: linksReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
