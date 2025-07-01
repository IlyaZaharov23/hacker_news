import { createSlice } from "@reduxjs/toolkit";
import { StoryType } from "../../types/componentTypes";

interface HackerNewsState {
  newStories: StoryType[];
  story: any;
  comment: any;
}

const initialState: HackerNewsState = {
  newStories: [],
  story: null,
  comment: null,
};

export const hackerNewsSlice = createSlice({
  name: "hackerNews",
  initialState,
  reducers: {
    setNewStories: (state, action) => {
      state.newStories = action.payload;
    },
    setStory: (state, action) => {
      state.story = action.payload;
    },
  },
});
