import { CommentItem } from ".";
import * as hooks from "store/hooks";
import { TEST_COMMENT_1, TEST_COMMENT_2 } from "store/hackerNews/testContants";
import { render, screen } from "@testing-library/react";
import { TEST_ID } from "constants/testIds";
import userEvent from "@testing-library/user-event";

jest.mock("store/hackerNews/actions");

describe("Comment Item test", () => {
  test("Click on show/hide nested comments button", async () => {
    jest
      .spyOn(hooks, "useAppSelector")
      .mockImplementation(() => [TEST_COMMENT_2]);
    jest
      .spyOn(hooks, "useAppDispatch")
      .mockImplementation(
        () => (() => ({ unwrap: () => Promise.resolve() })) as any
      );
    render(<CommentItem comment={TEST_COMMENT_1} />);
    const showNestedComments = await screen.findByTestId(
      TEST_ID.COMMENTS.SHOW_NESTED_COMMENS_BUTTON(TEST_COMMENT_1.id)
    );
    userEvent.click(showNestedComments);
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
        TEST_ID.COMMENTS.SHOW_NESTED_COMMENS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeNull();
    const hideNestedCommentsButton = await screen.findByTestId(
      TEST_ID.COMMENTS.HIDE_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
    );
    userEvent.click(hideNestedCommentsButton);
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.SHOW_NESTED_COMMENS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(
        TEST_ID.COMMENTS.HIDE_NESTED_COMMENTS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeNull();
    expect(
      screen.queryByTestId(
        TEST_ID.COMMENTS.NESTED_COMMENTS_ROOT(TEST_COMMENT_1.id)
      )
    ).toBeNull();
  });
});
