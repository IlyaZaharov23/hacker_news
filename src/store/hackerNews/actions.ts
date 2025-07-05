import { createAppAsyncThunk } from "../hooks";
import { API_ENDPOINTS } from "../../config/api";
import { ApiWrapper } from "../../services";
import { hackerNewsSlice } from "./reducers";

export const {
  setActiveStory,
  removeActiveStory,
  setNewStories,
  addActiveStory,
  addStoryComments,
  removeStoryComments,
  addNestedCommentsById,
  removeNestedComments,
} = hackerNewsSlice.actions;

export const getStoryIds = createAppAsyncThunk(
  "hackerNews/getStoryIds",
  async () => {
    try {
      const resp = await ApiWrapper.get(API_ENDPOINTS.TOP_STORIES);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStoryById = createAppAsyncThunk(
  "hackerNews/getStoryById",
  async (id: number) => {
    try {
      const resp = await ApiWrapper.get(API_ENDPOINTS.STORY(id));
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCommentById = createAppAsyncThunk(
  "hackerNews/getCommentById",
  async (id: number) => {
    try {
      const resp = await ApiWrapper.get(API_ENDPOINTS.COMMENT(id));
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
