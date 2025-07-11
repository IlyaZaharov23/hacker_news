import { RootState } from "store";

export const activeStoriesGet = (state: RootState) =>
  state.hackerNews.activeStories;
