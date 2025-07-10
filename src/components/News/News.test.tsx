import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestRender } from "routes/testRender";
import { SCREEN_ROUTES } from "routes/constants";
import * as actions from "store/hackerNews/actions";
import * as hooks from "store/hooks";
import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";
import { TEST_ID } from "constants/testIds";

jest.mock("store/hackerNews/actions");

describe("News page test", () => {
  test("page elements are rendered", async () => {
    render(<TestRender baseRoute={SCREEN_ROUTES.NEWS_LIST} />);
    const newsRoot = await screen.findByTestId(
      TEST_ID.NEWS_PAGE.NEWS_PAGE_ROOT
    );
    const header = await screen.findByTestId(TEST_ID.HEADER.HEADER_ROOT);
    const backButton = await screen.findByTestId(TEST_ID.HEADER.BACK_BUTTON);
    const updateButton = await screen.findByTestId(
      TEST_ID.HEADER.UPDATE_BUTTON
    );
    const appLogo = await screen.findByTestId(TEST_ID.HEADER.APP_LOGO);
    const menuButton = await screen.findByTestId(TEST_ID.HEADER.MENU_BUTTON);
    expect(newsRoot).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
    expect(appLogo).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();
  });
  test("page loading state test", async () => {
    (actions.getStoryIds as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => new Promise(() => {}),
      })
    );
    render(<TestRender baseRoute={SCREEN_ROUTES.NEWS_LIST} />);
    const updateButton = await screen.findByTestId(
      TEST_ID.HEADER.UPDATE_BUTTON
    );
    await userEvent.click(updateButton);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_SKELETON)
    ).toBeInTheDocument();
  });
  test("page empty news list test", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector.name === "newStoriesGet") return [];
    });
    render(<TestRender baseRoute={SCREEN_ROUTES.NEWS_LIST} />);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_PLACEHOLDER)
    ).toBeInTheDocument();
  });
  test("page news with items test", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector.name === "newStoriesGet") {
        return [TEST_STORY_1, TEST_STORY_2];
      }
    });
    render(<TestRender baseRoute={SCREEN_ROUTES.NEWS_LIST} />);
    expect(await screen.findByText(TEST_STORY_1.title)).toBeInTheDocument();
    expect(await screen.findByText(TEST_STORY_2.title)).toBeInTheDocument();
  });

  test("navigate to story page", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector.name === "newStoriesGet") {
        return [TEST_STORY_1, TEST_STORY_2];
      }
      if (selector.name === "activeStoryGetById") {
        return TEST_STORY_1;
      }
    });
    (actions.getStoryIds as unknown as jest.Mock).mockImplementation(
      (endpoint) => () => ({
        unwrap: () => Promise.resolve([TEST_STORY_1.id, TEST_STORY_2.id]),
      })
    );
    (actions.getStoryById as unknown as jest.Mock).mockImplementation(
      (id) => () => ({
        unwrap: () =>
          Promise.resolve(id === TEST_STORY_1.id ? TEST_STORY_1 : TEST_STORY_2),
      })
    );
    (actions.getCommentById as unknown as jest.Mock).mockImplementation(
      (id) => () => ({
        unwrap: () => Promise.resolve([]),
      })
    );
    (actions.addActiveStory as unknown as jest.Mock).mockImplementation(
      ({ id, story }) => ({
        type: "ADD_ACTIVE_STORY",
        payload: { id, story },
      })
    );
    (actions.addStoryComments as unknown as jest.Mock).mockImplementation(
      ({ id, comments }) => ({
        type: "ADD_STORY_COMMENTS",
        payload: { id, comments },
      })
    );
    render(<TestRender baseRoute={SCREEN_ROUTES.NEWS_LIST} />);
    const storyItem = await screen.findByTestId(
      TEST_ID.NEWS_PAGE.NEWS_ITEM_IN_LIST(TEST_STORY_1.id)
    );
    await userEvent.click(storyItem);
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_PAGE_ROOT(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
  });
});
