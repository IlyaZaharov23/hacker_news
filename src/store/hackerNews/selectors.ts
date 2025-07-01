import { RootState } from "..";

export const newStoriesGet = (state: RootState) => state.hackerNews.newStories;
export const storyGet = (state: RootState) => state.hackerNews.story
