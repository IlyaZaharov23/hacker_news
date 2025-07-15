import { initialState } from "store/hackerNews/reducers/reducers";
import { getNestedComments } from ".";
import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_COMMENT_3,
  TEST_COMMENT_4,
} from "store/hackerNews/testContants";
import { RootState } from "store";

describe("getNestedComments test", () => {
  test("returns nestedComments object", () => {
    expect(
      getNestedComments({
        hackerNews: {
          ...initialState,
          nestedStoryComments: {
            [TEST_COMMENT_1.id]: [TEST_COMMENT_2],
            [TEST_COMMENT_3.id]: [TEST_COMMENT_4],
          },
        },
      })
    ).toEqual({
      [TEST_COMMENT_1.id]: [TEST_COMMENT_2],
      [TEST_COMMENT_3.id]: [TEST_COMMENT_4],
    });
  });
  test("empty state case", () => {
    expect(getNestedComments({ hackerNews: initialState })).toEqual({});
  });
});

describe("getNestedComments immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      nestedStoryComments: {
        [TEST_COMMENT_1.id]: [TEST_COMMENT_2],
      },
    },
  };
  test("is getNestedComments immutable", () => {
    const originalState = JSON.parse(JSON.stringify(mockState));
    const result = getNestedComments(mockState);
    expect(result).toEqual(mockState.hackerNews.nestedStoryComments);
    expect(mockState).toEqual(originalState);
    expect(() => {
      result[TEST_COMMENT_3.id] = [TEST_COMMENT_4];
    }).toThrow();
  });
});
