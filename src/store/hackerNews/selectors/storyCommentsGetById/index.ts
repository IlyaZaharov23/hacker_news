import { RootState } from "store";
import { produce } from "immer";
export const storyCommentsGetById = (state: RootState, storyId: number) =>
  produce(state.hackerNews.storyComments[storyId], (draft) => draft);
