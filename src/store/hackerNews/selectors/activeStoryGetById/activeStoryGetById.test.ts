import { initialState } from "store/hackerNews/reducers/reducers";
import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";
import { RootState } from "store";
import { activeStoryGetById } from ".";

describe("activeStoryGetById test", () => {
  test("is returns correct value", () => {
    expect(
      activeStoryGetById(
        {
          hackerNews: {
            ...initialState,
            activeStories: {
              [TEST_STORY_1.id]: TEST_STORY_1,
              [TEST_STORY_2.id]: TEST_STORY_2,
            },
          },
        },
        TEST_STORY_1.id
      )
    ).toEqual(TEST_STORY_1);
  });
  test("invalid active story ID test", () => {
    expect(
      activeStoryGetById(
        {
          hackerNews: {
            ...initialState,
            activeStories: {
              [TEST_STORY_1.id]: TEST_STORY_1,
              [TEST_STORY_2.id]: TEST_STORY_2,
            },
          },
        },
        123
      )
    ).toBeUndefined();
  });
  test("story is null", () => {
    expect(
      activeStoryGetById(
        {
          hackerNews: {
            ...initialState,
            activeStories: {
              [TEST_STORY_1.id]: TEST_STORY_1,
              [TEST_STORY_2.id]: TEST_STORY_2,
              123: null,
            },
          },
        },
        123
      )
    ).toBeNull();
  });
});

describe("activeStoryGetById immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      activeStories: {
        [TEST_STORY_1.id]: TEST_STORY_1,
        [TEST_STORY_2.id]: TEST_STORY_2,
        123: null,
      },
    },
  };
  let originalState: RootState;
  beforeEach(() => {
    originalState = JSON.parse(JSON.stringify(mockState));
  });
  test("does not mutate state when story exists", () => {
    const result = activeStoryGetById(mockState, TEST_STORY_1.id);
    expect(mockState).toEqual(originalState);
    if (!result || typeof result !== "object") return;
    expect(() => {
      result.title = "John";
    }).toThrow();
  });
  test("does not mutate state when story is null", () => {
    const result = activeStoryGetById(mockState, 123);
    expect(mockState).toEqual(originalState);
    expect(result).toBeNull();
  });
  test("does not mutate state when story does't exist", () => {
    const result = activeStoryGetById(mockState, 999);
    expect(mockState).toEqual(originalState);
    expect(result).toBeUndefined();
  });
});
