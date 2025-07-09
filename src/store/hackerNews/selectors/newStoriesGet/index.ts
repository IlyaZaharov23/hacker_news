import { RootState } from "store";
import { produce } from "immer";

export const newStoriesGet = (state: RootState) =>
  produce(state.hackerNews.newStories, (draft) => draft);
