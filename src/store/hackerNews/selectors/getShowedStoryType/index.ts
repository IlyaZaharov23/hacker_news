import { RootState } from "store";

export const getShowedStoryType = (state: RootState) =>
  state.hackerNews.showedStoryType;
