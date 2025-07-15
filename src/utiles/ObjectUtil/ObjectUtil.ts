import { StoryType } from "types/commonTypes";

export class ObjectUtil {
  static getObjectKeys = (stories: { [id: number]: StoryType | null }) => {
    return Object.keys(stories);
  };
}
