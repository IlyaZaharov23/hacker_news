import { createAppAsyncThunk } from "../hooks";
import { API_ENDPOINTS } from "../../config/api";
import { ApiWrapper } from "../../services";
import { hackerNewsSlice } from "./reducers";

export const { setStory, setNewStories } = hackerNewsSlice.actions;

export const getStoryIds = createAppAsyncThunk(
  "hackerNews/getStoryIds",
  async (_, thunkApi) => {
    try {
      const resp = await ApiWrapper.get(API_ENDPOINTS.NEW_STORIES);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStoryById = createAppAsyncThunk(
  "hackerNews/getStoryById",
  async (id: number, thunkApi) => {
    try {
      const resp = await ApiWrapper.get(API_ENDPOINTS.STORY(id));
      return resp.data
    } catch (error) {
      console.log(error);
    }
  }
);
