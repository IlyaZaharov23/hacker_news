import { CommentType } from "types/commonTypes";

export type CommentItemPropsType = {
  comment: CommentType;
};

export type CommentsPropsType = {
  storyId: number | undefined;
  isLoading: boolean;
  hasError: boolean
};

export type StoryPageHeaderPropsType = {
  isLoading: boolean;
  hasError: boolean;
};
