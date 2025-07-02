import { createSlice } from "@reduxjs/toolkit";
import { StoryType, CommentType } from "../../types/componentTypes";

interface HackerNewsState {
  newStories: StoryType[];
  story: StoryType | null;
  storyComments: CommentType[];
}

const initialState: HackerNewsState = {
  newStories: [],
  story: null,
  storyComments: [],
};

export const hackerNewsSlice = createSlice({
  name: "hackerNews",
  initialState,
  reducers: {
    setNewStories: (state, action) => {
      state.newStories = action.payload;
    },
    setActiveStory: (state, action) => {
      state.story = action.payload;
    },
    setStoryComments: (state, action) => {
      state.storyComments = action.payload;
    },
  },
});
