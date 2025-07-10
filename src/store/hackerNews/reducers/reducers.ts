import { createSlice } from "@reduxjs/toolkit";
import { StoryType, CommentType } from "types/componentTypes";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";

export interface HackerNewsState {
  newStories: StoryType[];
  activeStories: {
    [storyId: number]: StoryType | null;
  };
  storyComments: {
    [storyId: number]: CommentType[] | null;
  };
  nestedStoryComments: {
    [parentCommentId: number]: CommentType[];
  };
  showedStoryType: string;
}

export const initialState: HackerNewsState = {
  newStories: [],
  activeStories: {},
  storyComments: {},
  nestedStoryComments: {},
  showedStoryType: STORIES_SHOWED_TYPE.NEW,
};

export const hackerNewsSlice = createSlice({
  name: "hackerNews",
  initialState,
  reducers: {
    setNewStories: (state, action) => {
      state.newStories = action.payload;
    },
    addActiveStory: (state, action) => {
      state.activeStories[action.payload.id] = action.payload.story;
    },
    clearActiveStories: (state) => {
      state.activeStories = {};
    },
    addStoryComments: (state, action) => {
      state.storyComments[action.payload.id] = action.payload.comments;
    },
    clearAllStoryComments: (state) => {
      state.storyComments = {};
    },
    addNestedCommentsById: (state, action) => {
      state.nestedStoryComments[action.payload.id] = action.payload.comments;
    },
    removeNestedCommentsById: (state, action) => {
      const id = action.payload;
      delete state.nestedStoryComments[id];
    },
    clearAllNestedComments: (state) => {
      state.nestedStoryComments = {};
    },
    setShowedStoryType: (state, action) => {
      state.showedStoryType = action.payload;
    },
  },
});
