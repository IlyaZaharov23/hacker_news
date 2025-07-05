import { RootState } from "..";

export const newStoriesGet = (state: RootState) => state.hackerNews.newStories;
export const storyCommentsGetById = (state: RootState, storyId: number) =>
  state.hackerNews.storyComments[storyId];
export const nestedCommentsGetById = (state: RootState, id: number) =>
  state.hackerNews.nestedStoryComments[id];
export const activeStoryGetById = (state: RootState, id: number) =>
  state.hackerNews.activeStories[id];
export const getShowedStoryType = (state: RootState) =>
  state.hackerNews.showedStoryType;
