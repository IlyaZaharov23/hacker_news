import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoryType } from "types/componentTypes";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";
import {
  HackerNewsStateType,
  StoryPayloadType,
  CommentsPayloadType,
} from "./reducerTypes";

export const initialState: HackerNewsStateType = {
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
    setNewStories: (state, action: PayloadAction<StoryType[]>) => {
      state.newStories = action.payload;
    },
    addActiveStory: (state, action: PayloadAction<StoryPayloadType>) => {
      state.activeStories[action.payload.id] = action.payload.story;
    },
    clearActiveStories: (state) => {
      state.activeStories = {};
    },
    addStoryComments: (state, action: PayloadAction<CommentsPayloadType>) => {
      state.storyComments[action.payload.id] = action.payload.comments;
    },
    clearAllStoryComments: (state) => {
      state.storyComments = {};
    },
    addNestedCommentsById: (
      state,
      action: PayloadAction<CommentsPayloadType>
    ) => {
      state.nestedStoryComments[action.payload.id] = action.payload.comments;
    },
    removeNestedCommentsById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      delete state.nestedStoryComments[id];
    },
    clearAllNestedComments: (state) => {
      state.nestedStoryComments = {};
    },
    setShowedStoryType: (state, action: PayloadAction<string>) => {
      state.showedStoryType = action.payload;
    },
  },
});
