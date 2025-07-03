import { createSlice } from "@reduxjs/toolkit";
import { StoryType, CommentType } from "../../types/componentTypes";

interface HackerNewsState {
  newStories: StoryType[];
  story: StoryType | null;
  storyComments: CommentType[];
  nestedStoryComments: {
    [parentCommentId: number]: CommentType[];
  };
}

const initialState: HackerNewsState = {
  newStories: [],
  story: null,
  storyComments: [],
  nestedStoryComments: {},
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
    addNestedCommentsById: (state, action) => {
      state.nestedStoryComments[action.payload.id] = action.payload.comments;
    },
    removeNestedComments: (state, action) => {
      delete state.nestedStoryComments[action.payload.Id];
    },
  },
});
