import { RootState } from "store";
import { produce } from "immer";

export const activeStoryGetById = (state: RootState, id: number) =>
  produce(state.hackerNews.activeStories[id], (draft) => draft);
