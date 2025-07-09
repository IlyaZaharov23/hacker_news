import { createSlice } from "@reduxjs/toolkit";
import { StoryType, CommentType } from "types/componentTypes";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";

interface HackerNewsState {
  newStories: StoryType[];
  activeStories: {
    [storyId: number]: StoryType | null;
  };
  story: StoryType | null;
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
  story: null,
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
    setActiveStory: (state, action) => {
      state.story = action.payload;
    },
    addActiveStory: (state, action) => {
      state.activeStories[action.payload.id] = action.payload.story;
    },
    removeActiveStory: (state, action) => {
      delete state.activeStories[action.payload.id];
    },
    addStoryComments: (state, action) => {
      state.storyComments[action.payload.id] = action.payload.comments;
    },
    removeStoryComments: (state, action) => {
      delete state.storyComments[action.payload.id];
    },
    setStoryComments: (state, action) => {
      state.storyComments = action.payload;
    },
    addNestedCommentsById: (state, action) => {
      state.nestedStoryComments[action.payload.id] = action.payload.comments;
    },
    removeNestedComments: (state, action) => {
      delete state.nestedStoryComments[action.payload.id];
    },
    setShowedStoryType: (state, action) => {
      state.showedStoryType = action.payload;
    },
  },
});
