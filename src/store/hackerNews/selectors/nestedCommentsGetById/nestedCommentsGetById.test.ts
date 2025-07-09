import { initialState } from "store/hackerNews/reducers";
import { nestedCommentsGetById } from ".";
import { RootState } from "store";
import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_COMMENT_3,
  TEST_COMMENT_4,
} from "store/hackerNews/testContants";

describe("nestedCommentsGetById test", () => {
  test("returns correct nested comments list", () => {
    expect(
      nestedCommentsGetById(
        {
          hackerNews: {
            ...initialState,
            nestedStoryComments: {
              [TEST_COMMENT_1.id]: [
                TEST_COMMENT_2,
                TEST_COMMENT_3,
                TEST_COMMENT_4,
              ],
              [TEST_COMMENT_2.id]: [
                TEST_COMMENT_3,
                TEST_COMMENT_4,
                TEST_COMMENT_1,
              ],
            },
          },
        },
        TEST_COMMENT_1.id
      )
    ).toEqual([TEST_COMMENT_2, TEST_COMMENT_3, TEST_COMMENT_4]);
  });
  test("invalid parent comment ID", () => {
    expect(
      nestedCommentsGetById(
        {
          hackerNews: {
            ...initialState,
            nestedStoryComments: {
              [TEST_COMMENT_1.id]: [
                TEST_COMMENT_2,
                TEST_COMMENT_3,
                TEST_COMMENT_4,
              ],
              [TEST_COMMENT_2.id]: [
                TEST_COMMENT_3,
                TEST_COMMENT_4,
                TEST_COMMENT_1,
              ],
            },
          },
        },
        123
      )
    ).toBeUndefined();
  });
});

describe("nestedCommentsGetById immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      nestedStoryComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_2, TEST_COMMENT_3],
        [TEST_COMMENT_2.id]: [TEST_COMMENT_3, TEST_COMMENT_4, TEST_COMMENT_1],
      },
    },
  };
  let originalState: RootState;
  beforeEach(() => {
    originalState = JSON.parse(JSON.stringify(mockState));
  });
  test("does not mutate nested comments object", () => {
    const result = nestedCommentsGetById(mockState, TEST_COMMENT_1.id);
    expect(result).toEqual(
      mockState.hackerNews.nestedStoryComments[TEST_COMMENT_1.id]
    );
    expect(mockState).toEqual(originalState);
  });
  test("does not mutate comments list", () => {
    const result = nestedCommentsGetById(mockState, TEST_COMMENT_1.id);
    expect(mockState).toEqual(originalState);
    expect(() => {
      result.push(TEST_COMMENT_4);
    }).toThrow();
  });
  test("does not mutate comment item", () => {
    const result = nestedCommentsGetById(mockState, TEST_COMMENT_1.id);
    expect(mockState).toEqual(originalState);
    expect(() => {
      result[0].text = "Some test text!";
    }).toThrow();
  });
});
