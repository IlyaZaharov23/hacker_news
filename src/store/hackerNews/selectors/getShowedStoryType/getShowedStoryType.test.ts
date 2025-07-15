import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";
import { RootState } from "store";
import { initialState } from "store/hackerNews/reducers/reducers";
import { getShowedStoryType } from ".";

describe("getShowedStoryType test", () => {
  test("returns correct initial value type", () => {
    expect(
      getShowedStoryType({
        hackerNews: initialState,
      })
    ).toEqual(STORIES_SHOWED_TYPE.NEW);
  });
  test("returns correct changed value type", () => {
    expect(
      getShowedStoryType({
        hackerNews: {
          ...initialState,
          showedStoryType: STORIES_SHOWED_TYPE.TOP,
        },
      })
    ).toEqual(STORIES_SHOWED_TYPE.TOP);
  });
});

describe("getShowedStoryType immutability", () => {
  const mockState: RootState = {
    hackerNews: {
      ...initialState,
      showedStoryType: STORIES_SHOWED_TYPE.NEW,
    },
  };
  test("is getShowedStoryType immutable", () => {
    const originalState = JSON.parse(JSON.stringify(mockState));
    getShowedStoryType(mockState);
    expect(mockState).toEqual(originalState);
  });
});
