import { StoryType } from "types/commonTypes";
import { CommentType } from "types/commonTypes";

export interface HackerNewsStateType {
  newStories: StoryType[];
  activeStories: {
    [storyId: number]: StoryType | null;
  };
  storyComments: {
    [storyId: number]: CommentType[] | null;
  };
  nestedStoryComments: {
    [parentCommentId: number]: CommentType[];
  };
  showedStoryType: string;
}

export type StoryPayloadType = {
  id: number;
  story: StoryType;
};

export type CommentsPayloadType = {
  id: number;
  comments: CommentType[];
};
