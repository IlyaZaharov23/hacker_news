import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import * as hooks from "store/hooks";
import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_STORY_1,
} from "store/hackerNews/testContants";
import { TEST_ID } from "constants/testIds";
import { CommentItem } from ".";
import { getNestedComments } from "store/hackerNews/selectors/getNestedComments";
import { initialState } from "store/hackerNews/reducers/reducers";

jest.mock("store/hackerNews/actions");

describe("Comment Item test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Click on show nested comments button", async () => {
    let hasNested = false;
    jest
      .spyOn(hooks, "useAppDispatch")
      .mockImplementation(
        () => (() => ({ unwrap: () => Promise.resolve() })) as any
      );
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === getNestedComments) {
        return hasNested ? { [TEST_COMMENT_1.id]: [TEST_COMMENT_2] } : {};
      }
      if (typeof selector === "function") {
        const fakeState = {
          hackerNews: {
            ...initialState,
            storyComments: { [TEST_STORY_1.id]: [TEST_COMMENT_1] },
            nestedStoryComments: hasNested
              ? { [TEST_COMMENT_1.id]: [TEST_COMMENT_2] }
              : {},
          },
        };
        const result = selector(fakeState);
        if (Array.isArray(result)) return result;
        return [];
      }
    });
    render(<CommentItem comment={TEST_COMMENT_1} />);
    const showNestedButton = await screen.findByTestId(
      TEST_ID.COMMENTS.SHOW_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
    );
    hasNested = true;
    userEvent.click(showNestedButton);
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.NESTED_COMMENTS_ROOT(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.HIDE_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(
        TEST_ID.COMMENTS.SHOW_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
      )
    ).not.toBeInTheDocument();
  });
  test("Click on show nested with error state", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === getNestedComments) {
        return {};
      }
      return {};
    });
    jest
      .spyOn(hooks, "useAppDispatch")
      .mockImplementation(
        () => (() => ({ unwrap: () => Promise.reject() })) as any
      );
    render(<CommentItem comment={TEST_COMMENT_1} />);
    const showNestedCommentButton = await screen.findByTestId(
      TEST_ID.COMMENTS.SHOW_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
    );
    userEvent.click(showNestedCommentButton);
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.NESTED_COMMENTS_ERROR_PLACEHOLDER(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.RELOAD_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
  });
  test("Click on hide nested comments", async () => {
    let hasNested = true;
    jest
      .spyOn(hooks, "useAppDispatch")
      .mockImplementation(
        () => (() => ({ unwrap: () => Promise.resolve() })) as any
      );
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === getNestedComments) {
        return hasNested ? { [TEST_COMMENT_1.id]: [TEST_COMMENT_2] } : {};
      }
      if (typeof selector === "function") {
        const fakeState = {
          hackerNews: {
            ...initialState,
            storyComments: { [TEST_STORY_1.id]: [TEST_COMMENT_1] },
            nestedStoryComments: hasNested
              ? { [TEST_COMMENT_1.id]: [TEST_COMMENT_2] }
              : {},
          },
        };
        const result = selector(fakeState);
        if (Array.isArray(result)) return result;
        return [];
      }
    });
    const { rerender } = render(<CommentItem comment={TEST_COMMENT_1} />);
    const hideNestedButton = await screen.findByTestId(
      TEST_ID.COMMENTS.HIDE_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
    );
    userEvent.click(hideNestedButton);
    hasNested = false;
    rerender(<CommentItem comment={TEST_COMMENT_1} />);
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.SHOW_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(
        TEST_ID.COMMENTS.NESTED_COMMENTS_ROOT(TEST_COMMENT_1.id)
      )
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId(
        TEST_ID.COMMENTS.HIDE_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
      )
    ).not.toBeInTheDocument();
  });
});
