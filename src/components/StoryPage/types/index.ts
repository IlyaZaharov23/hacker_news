import { CommentType } from "types/commonTypes";

export type CommentItemPropsType = {
  comment: CommentType;
};

export type CommentsPropsType = {
  storyId: number | undefined;
  isLoading: boolean;
};

export type StoryPageHeaderPropsType = {
  isLoading: boolean;
};
