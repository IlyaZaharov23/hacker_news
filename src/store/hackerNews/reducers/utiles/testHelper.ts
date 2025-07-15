import { UnknownAction } from "@reduxjs/toolkit";
import { hackerNewsSlice } from "../reducers";
import { HackerNewsStateType } from "../types";

const hackerNewsReducer = hackerNewsSlice.reducer;

export const generateTestCase = (
  actionName: string,
  initialState: HackerNewsStateType,
  action: (param: any) => UnknownAction,
  expectedState: HackerNewsStateType,
  param?: any
) => {
  return test(`${actionName} test`, () => {
    expect(hackerNewsReducer(initialState, action(param))).toEqual(
      expectedState
    );
    if (initialState === require("../reducers").initialState) {
      expect(hackerNewsReducer(undefined, action(param))).toEqual(
        expectedState
      );
    }
  });
};
