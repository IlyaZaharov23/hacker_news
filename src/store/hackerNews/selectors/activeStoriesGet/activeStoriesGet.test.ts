import { initialState } from "store/hackerNews/reducers/reducers";
import { RootState } from "store";
import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";
import { activeStoriesGet } from ".";

describe("activeStoriesGet test", () => {
  test("returns active stories object", () => {
    expect(
      activeStoriesGet({
        hackerNews: {
          ...initialState,
          activeStories: {
            [TEST_STORY_1.id]: TEST_STORY_1,
            [TEST_STORY_2.id]: TEST_STORY_2,
          },
        },
      })
    ).toEqual({
      [TEST_STORY_1.id]: TEST_STORY_1,
      [TEST_STORY_2.id]: TEST_STORY_2,
    });
  });
  test("empty state case", () => {
    expect(activeStoriesGet({ hackerNews: initialState })).toEqual({});
  });
});

describe("activeStoriesGet immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      activeStories: { [TEST_STORY_1.id]: TEST_STORY_1 },
    },
  };
  test("is activeStoriesGet immutable", () => {
    const originalState = JSON.parse(JSON.stringify(mockState));
    const result = activeStoriesGet(mockState);
    expect(result).toEqual(mockState.hackerNews.activeStories);
    expect(mockState).toEqual(originalState);
    expect(() => {
      result[TEST_STORY_2.id] = TEST_STORY_2;
    }).toThrow();
  });
});
