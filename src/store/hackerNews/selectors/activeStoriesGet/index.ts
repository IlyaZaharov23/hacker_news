import { RootState } from "store";
import { produce } from "immer";

export const activeStoriesGet = (state: RootState) =>
  produce(state.hackerNews.activeStories, (draft) => draft);
