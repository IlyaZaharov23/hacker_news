import { initialState } from "store/hackerNews/reducers/reducers";
import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_COMMENT_3,
  TEST_COMMENT_4,
  TEST_STORY_1,
  TEST_STORY_2,
} from "store/hackerNews/testContants";
import { RootState } from "store";
import { storyCommentsGetById } from ".";

describe("storyCommentsGetById test", () => {
  test("returns correct comment list", () => {
    expect(
      storyCommentsGetById(
        {
          hackerNews: {
            ...initialState,
            storyComments: {
              [TEST_STORY_1.id]: [TEST_COMMENT_1, TEST_COMMENT_2],
              [TEST_STORY_2.id]: [TEST_COMMENT_3, TEST_COMMENT_4],
            },
          },
        },
        TEST_STORY_1.id
      )
    ).toEqual([TEST_COMMENT_1, TEST_COMMENT_2]);
  });
  test("comments list is null", () => {
    expect(
      storyCommentsGetById(
        {
          hackerNews: {
            ...initialState,
            storyComments: {
              [TEST_STORY_1.id]: [TEST_COMMENT_1, TEST_COMMENT_2],
              [TEST_STORY_2.id]: [TEST_COMMENT_3, TEST_COMMENT_4],
              123: null,
            },
          },
        },
        123
      )
    ).toBeNull();
  });
  test("invalid story ID for comments getting", () => {
    expect(
      storyCommentsGetById(
        {
          hackerNews: {
            ...initialState,
            storyComments: {
              [TEST_STORY_1.id]: [TEST_COMMENT_1, TEST_COMMENT_2],
              [TEST_STORY_2.id]: [TEST_COMMENT_3, TEST_COMMENT_4],
            },
          },
        },
        123
      )
    ).toBeUndefined();
  });
});

describe("storyCommentsGetById immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      storyComments: {
        [TEST_STORY_1.id]: [TEST_COMMENT_1, TEST_COMMENT_2],
        [TEST_STORY_2.id]: [TEST_COMMENT_3, TEST_COMMENT_4],
        123: null,
      },
    },
  };
  let originalState: RootState;
  beforeEach(() => {
    originalState = JSON.parse(JSON.stringify(mockState));
  });
  test("does not mutate comments object", () => {
    const result = storyCommentsGetById(mockState, TEST_STORY_1.id);
    expect(mockState).toEqual(originalState);
    expect(result).toEqual(mockState.hackerNews.storyComments[TEST_STORY_1.id]);
  });
  test("does not mutate comment list", () => {
    const result = storyCommentsGetById(mockState, TEST_STORY_1.id);
    expect(mockState).toEqual(originalState);
    expect(() => {
      result?.push(TEST_COMMENT_3);
    }).toThrow();
  });
  test("does not mutate comment iten", () => {
    const result = storyCommentsGetById(mockState, TEST_STORY_1.id);
    expect(mockState).toEqual(originalState);
    if (!result || !result[0]) return;
    expect(() => {
      result[0].text = "Go it!";
    }).toThrow();
  });
});
