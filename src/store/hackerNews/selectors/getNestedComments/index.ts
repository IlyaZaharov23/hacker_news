import { produce } from "immer";
import { RootState } from "store";

export const getNestedComments = (state: RootState) =>
  produce(state.hackerNews.nestedStoryComments, (draft) => draft);
