import { StoryType } from "types/commonTypes";

export const getStoriesIds = (stories: {
  [storyId: number]: StoryType | null;
}) => {
  return Object.keys(stories);
};
