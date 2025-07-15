import { render, screen } from "@testing-library/react";
import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_STORY_1,
} from "store/hackerNews/testContants";
import { TEST_ID } from "constants/testIds";
import * as hooks from "store/hooks";
import * as actions from "store/hackerNews/actions";
import { Comments } from ".";

jest.mock("store/hackerNews/actions");

describe("Comments component test", () => {
  beforeAll(() => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
    jest
      .spyOn(hooks, "useAppDispatch")
      .mockImplementation(() => (action: any) => action);
    (actions.getCommentById as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => Promise.resolve(TEST_COMMENT_2),
      })
    );
    (actions.addNestedCommentsById as unknown as jest.Mock).mockImplementation(
      ({ id, comments }) => ({
        type: actions.addNestedCommentsById.type,
        payload: { id, comments },
      })
    );
    (
      actions.removeNestedCommentsById as unknown as jest.Mock
    ).mockImplementation((id) => ({
      type: actions.removeNestedCommentsById.type,
      payload: id,
    }));
  });
  test("Comments skeleton render", async () => {
    render(<Comments isLoading={true} storyId={TEST_STORY_1.id} />);
    expect(
      await screen.findByTestId(TEST_ID.COMMENTS.COMMENTS_SKELETON)
    ).toBeInTheDocument();
  });
  test("Empty comments list case", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => []);
    render(<Comments isLoading={false} storyId={TEST_STORY_1.id} />);
    expect(
      await screen.findByTestId(TEST_ID.COMMENTS.COMMENTS_PLACEHOLDER)
    ).toBeInTheDocument();
  });
  test("Case with comments list", async () => {
    jest
      .spyOn(hooks, "useAppSelector")
      .mockImplementation(() => [TEST_COMMENT_1]);
    render(<Comments isLoading={false} storyId={TEST_STORY_1.id} />);
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.COMMENT_ITEM(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        TEST_ID.COMMENTS.SHOW_NESTED_COMMENS_BUTTON(TEST_COMMENT_1.id)
      )
    ).toBeInTheDocument();
  });
});
