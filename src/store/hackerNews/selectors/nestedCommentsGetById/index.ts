import { RootState } from "store";
import { produce } from "immer";

export const nestedCommentsGetById = (state: RootState, id: number) =>
  produce(state.hackerNews.nestedStoryComments[id], (draft) => draft);
