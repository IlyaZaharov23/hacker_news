import { RootState } from "..";

export const newStoriesGet = (state: RootState) => state.hackerNews.newStories;
export const activeStoryGet = (state: RootState) => state.hackerNews.story;
export const storyCommentsGet = (state: RootState) =>
  state.hackerNews.storyComments;
