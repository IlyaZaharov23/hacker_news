import { produce } from "immer";
import { RootState } from "store";

export const activeStoriesGet = (state: RootState) =>
  produce(state.hackerNews.activeStories, (draft) => draft);
