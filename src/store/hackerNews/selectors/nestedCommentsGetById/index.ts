import { produce } from "immer";
import { RootState } from "store";

export const nestedCommentsGetById = (state: RootState, id: number) =>
  produce(state.hackerNews.nestedStoryComments[id], (draft) => draft);
