import { produce } from "immer";
import { RootState } from "store";

export const newStoriesGet = (state: RootState) =>
  produce(state.hackerNews.newStories, (draft) => draft);
