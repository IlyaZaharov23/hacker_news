const API_URL = "https://hacker-news.firebaseio.com/v0";

export const API_ENDPOINTS = {
  TOP_STORIES: `${API_URL}/topstories.json`,
  STORY: (id: number) => `${API_URL}/item/${id}.json?print=pretty`,
  USER: (id: number) => `${API_URL}/user/${id}.json`,
  COMMENT: (id: number) => `${API_URL}/item/${id}.json`,
  MAX_ITEM_ID: `${API_URL}/maxitem.json`,
  NEW_STORIES: `${API_URL}/newstories.json?print=pretty`,
  ASK_STORIES: `${API_URL}/askstories.json`,
  SHOW_STORIES: `${API_URL}/showstories.json`,
  JOB_STORIES: `${API_URL}/jobstories.json`,
  ITEM: (id: number) => `${API_URL}/item/${id}.json`,
  ITEM_BY_ID: (id: number) => `${API_URL}/item/${id}.json`,
};
