import { RootState } from "store";
import { newStoriesGet } from ".";
import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";
import { initialState } from "store/hackerNews/reducers";

describe("newStoriesGet test", () => {
  test("returns stories list", () => {
    expect(
      newStoriesGet({
        hackerNews: {
          ...initialState,
          newStories: [TEST_STORY_1],
        },
      })
    ).toEqual([TEST_STORY_1]);
  });
  test("empty stories list", () => {
    expect(
      newStoriesGet({
        hackerNews: initialState,
      })
    ).toEqual([]);
  });
});

describe("newStoriesGet immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      newStories: [TEST_STORY_1],
    },
  };
  test("is newStoriesGet immutable", () => {
    const originalState = JSON.parse(JSON.stringify(mockState));
    const result = newStoriesGet(mockState);
    expect(result).toEqual(mockState.hackerNews.newStories);
    expect(mockState).toEqual(originalState);
    expect(() => {
      result.push(TEST_STORY_2);
    }).toThrow();
  });
});
