import { ObjectUtil } from "./ObjectUtil";
import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";

describe("getObjectKeys test", () => {
  test("is returning IDs array for stories  correct", () => {
    expect(
      ObjectUtil.getObjectKeys({
        [TEST_STORY_1.id]: TEST_STORY_1,
        [TEST_STORY_2.id]: TEST_STORY_2,
      })
    ).toEqual([String(TEST_STORY_1.id), String(TEST_STORY_2.id)]);
  });
  test("has empty object param", () => {
    expect(ObjectUtil.getObjectKeys({})).toEqual([]);
  });
  test("case with null value", () => {
    expect(
      ObjectUtil.getObjectKeys({
        [TEST_STORY_1.id]: null,
        [TEST_STORY_2.id]: TEST_STORY_2,
      })
    ).toEqual([String(TEST_STORY_1.id), String(TEST_STORY_2.id)]);
  });
});
