import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";
import { getStoriesIds } from "./getStoriesIds";

describe("getStoriesIds test", () => {
  test("is returning IDs array correct", () => {
    expect(
      getStoriesIds({
        [TEST_STORY_1.id]: TEST_STORY_1,
        [TEST_STORY_2.id]: TEST_STORY_2,
      })
    ).toEqual([String(TEST_STORY_1.id), String(TEST_STORY_2.id)]);
  });
  test("has empty object param", () => {
    expect(getStoriesIds({})).toEqual([]);
  });
  test("case with null value", () => {
    expect(
      getStoriesIds({
        [TEST_STORY_1.id]: null,
        [TEST_STORY_2.id]: TEST_STORY_2,
      })
    ).toEqual([String(TEST_STORY_1.id), String(TEST_STORY_2.id)]);
  });
});
