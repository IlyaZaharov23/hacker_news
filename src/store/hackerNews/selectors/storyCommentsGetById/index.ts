import { produce } from "immer";
import { RootState } from "store";

export const storyCommentsGetById = (state: RootState, storyId: number) =>
  produce(state.hackerNews.storyComments[storyId], (draft) => draft);
