import { UnknownAction } from "@reduxjs/toolkit";
import { hackerNewsSlice, HackerNewsState } from "./reducers";

const hackerNewsReducer = hackerNewsSlice.reducer;

export const generateTestCase = (
  actionName: string,
  initialState: HackerNewsState,
  action: (param: any) => UnknownAction,
  expectedState: HackerNewsState,
  param?: any
) => {
  return test(`${actionName} test`, () => {
    expect(hackerNewsReducer(initialState, action(param))).toEqual(
      expectedState
    );
    if (initialState === require("./reducers").initialState) {
      expect(hackerNewsReducer(undefined, action(param))).toEqual(
        expectedState
      );
    }
  });
};
