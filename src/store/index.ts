import { configureStore } from "@reduxjs/toolkit";
import { hackerNewsSlice } from "./hackerNews/reducers";

export const store = configureStore({
  reducer: {
    hackerNews: hackerNewsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
