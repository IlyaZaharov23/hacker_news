import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_COMMENT_3,
  TEST_COMMENT_4,
  TEST_STORY_1,
  TEST_STORY_2,
} from "../testContants";
import {
  setNewStories,
  addActiveStory,
  clearActiveStories,
  addStoryComments,
  clearAllStoryComments,
  addNestedCommentsById,
  removeNestedCommentsById,
  clearAllNestedComments,
  setShowedStoryType,
} from "store/hackerNews/actions";
import { initialState } from "./reducers";
import { generateTestCase } from "./utiles/testHelper";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";

describe("HACKER_NEWS_REDUCER_TEST", () => {
  generateTestCase(
    "setNewStories",
    initialState,
    setNewStories,
    {
      ...initialState,
      newStories: [TEST_STORY_1, TEST_STORY_2],
    },
    [TEST_STORY_1, TEST_STORY_2]
  );
  generateTestCase(
    "addActiveStory",
    initialState,
    addActiveStory,
    {
      ...initialState,
      activeStories: {
        [TEST_STORY_1.id]: TEST_STORY_1,
      },
    },
    { id: TEST_STORY_1.id, story: TEST_STORY_1 }
  );
  generateTestCase(
    "clearActiveStories",
    {
      ...initialState,
      activeStories: {
        [TEST_STORY_1.id]: TEST_STORY_1,
        [TEST_STORY_2.id]: TEST_STORY_2,
      },
    },
    clearActiveStories,
    initialState
  );
  generateTestCase(
    "addStoryComments",
    initialState,
    addStoryComments,
    {
      ...initialState,
      storyComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_2, TEST_COMMENT_3, TEST_COMMENT_4],
      },
    },
    {
      id: TEST_COMMENT_1.id,
      comments: [TEST_COMMENT_2, TEST_COMMENT_3, TEST_COMMENT_4],
    }
  );
  generateTestCase(
    "clearAllStoryComments",
    {
      ...initialState,
      storyComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_2, TEST_COMMENT_3, TEST_COMMENT_4],
      },
    },
    clearAllStoryComments,
    initialState
  );
  generateTestCase(
    "addNestedCommentsById",
    initialState,
    addNestedCommentsById,
    {
      ...initialState,
      nestedStoryComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_2, TEST_COMMENT_3, TEST_COMMENT_4],
      },
    },
    {
      id: TEST_COMMENT_1.id,
      comments: [TEST_COMMENT_2, TEST_COMMENT_3, TEST_COMMENT_4],
    }
  );
  generateTestCase(
    "removeNestedCommentsById",
    {
      ...initialState,
      nestedStoryComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_3],
        [TEST_COMMENT_2.id]: [TEST_COMMENT_4],
      },
    },
    removeNestedCommentsById,
    {
      ...initialState,
      nestedStoryComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_3],
      },
    },
    TEST_COMMENT_2.id
  );
  generateTestCase(
    "clearAllNestedComments",
    {
      ...initialState,
      nestedStoryComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_3],
        [TEST_COMMENT_2.id]: [TEST_COMMENT_4],
      },
    },
    clearAllNestedComments,
    initialState
  );
  generateTestCase(
    "setShowedStoryType",
    initialState,
    setShowedStoryType,
    { ...initialState, showedStoryType: STORIES_SHOWED_TYPE.TOP },
    STORIES_SHOWED_TYPE.TOP
  );
});
