import { produce } from "immer";
import { RootState } from "store";

export const activeStoryGetById = (state: RootState, id: number) =>
  produce(state.hackerNews.activeStories[id], (draft) => draft);
