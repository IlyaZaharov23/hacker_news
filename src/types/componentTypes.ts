export type StoryType = {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type CommentType = {
  by: string;
  id: number;
  kids?: number[] | undefined;
  parent: number;
  text: string;
  time: number;
  type: string;
  deleted?: boolean
};
