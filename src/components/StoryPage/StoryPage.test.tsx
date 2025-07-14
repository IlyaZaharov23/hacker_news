import { render, screen } from "@testing-library/react";
import { SCREEN_ROUTES } from "routes/constants";
import { TestRender } from "routes/testRender";
import {
  TEST_COMMENT_1,
  TEST_COMMENT_2,
  TEST_STORY_1,
} from "store/hackerNews/testContants";
import { UrlUtil } from "utiles/UrlUtil/UrlUtil";
import * as actions from "store/hackerNews/actions";
import * as hooks from "store/hooks";
import { TEST_ID } from "constants/testIds";
import userEvent from "@testing-library/user-event";

jest.mock("store/hackerNews/actions");

describe("story page test", () => {
  beforeEach(() => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
    jest
      .spyOn(hooks, "useAppSelector")
      .mockImplementation(() => [TEST_COMMENT_1, TEST_COMMENT_2]);
    (actions.getCommentById as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => Promise.resolve(),
      })
    );
    (actions.getStoryById as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => Promise.resolve(TEST_STORY_1),
      })
    );
    (actions.addStoryComments as unknown as jest.Mock).mockImplementation(
      ({ id, comments }) => ({
        type: actions.addStoryComments.type,
        payload: { id, comments },
      })
    );
    (actions.addActiveStory as unknown as jest.Mock).mockImplementation(
      ({ id, story }) => ({
        type: actions.addActiveStory.type,
        payload: { id, story },
      })
    );
  });
  test("page components render", async () => {
    render(
      <TestRender
        baseRoutes={[
          UrlUtil.getTestUrl(SCREEN_ROUTES.NEWS_ITEM, TEST_STORY_1.id),
        ]}
      />
    );
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_PAGE_ROOT(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_HEADER(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(TEST_ID.COMMENTS.COMMENTS_ROOT(TEST_STORY_1.id))
    ).toBeInTheDocument();
  });
  test("back button click", async () => {
    render(
      <TestRender
        baseRoutes={[
          UrlUtil.getTestUrl(SCREEN_ROUTES.NEWS_ITEM, TEST_STORY_1.id),
        ]}
      />
    );
    const backButton = await screen.findByTestId(TEST_ID.HEADER.BACK_BUTTON);
    userEvent.click(backButton);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_PAGE.NEWS_PAGE_ROOT)
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(TEST_ID.STORY_PAGE.STORY_PAGE_ROOT(TEST_STORY_1.id))
    ).toBeNull();
  });
  test("redirect to story original source", async () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
    render(
      <TestRender
        baseRoutes={[
          UrlUtil.getTestUrl(SCREEN_ROUTES.NEWS_ITEM, TEST_STORY_1.id),
        ]}
      />
    );
    const redirectButton = await screen.findByTestId(
      TEST_ID.STORY_PAGE.STORY_HEADER_REDIRECT_TO_STORY(TEST_STORY_1.id)
    );
    userEvent.click(redirectButton);
    expect(openSpy).toHaveBeenCalledWith(TEST_STORY_1.url);
    openSpy.mockRestore();
  });
});
