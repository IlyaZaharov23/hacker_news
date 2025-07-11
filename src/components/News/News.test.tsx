import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestRender } from "routes/testRender";
import { SCREEN_ROUTES } from "routes/constants";
import * as actions from "store/hackerNews/actions";
import * as hooks from "store/hooks";
import { TEST_STORY_1, TEST_STORY_2 } from "store/hackerNews/testContants";
import { newStoriesGet } from "store/hackerNews/selectors/newStoriesGet";
import { getShowedStoryType } from "store/hackerNews/selectors/getShowedStoryType";
import { activeStoryGetById } from "store/hackerNews/selectors/activeStoryGetById";
import { TEST_ID } from "constants/testIds";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";

jest.mock("store/hackerNews/actions");

describe("News page test", () => {
  test("page elements are rendered", async () => {
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
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
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
    const updateButton = await screen.findByTestId(
      TEST_ID.HEADER.UPDATE_BUTTON
    );
    userEvent.click(updateButton);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_SKELETON)
    ).toBeInTheDocument();
  });
  test("page empty news list test", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === newStoriesGet) return [];
    });
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_PLACEHOLDER)
    ).toBeInTheDocument();
  });
  test("page news with items test", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === newStoriesGet) {
        return [TEST_STORY_1, TEST_STORY_2];
      }
    });
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
    expect(await screen.findByText(TEST_STORY_1.title)).toBeInTheDocument();
    expect(await screen.findByText(TEST_STORY_2.title)).toBeInTheDocument();
  });
  test("navigate to story page", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === newStoriesGet) {
        return [TEST_STORY_1, TEST_STORY_2];
      }
      if (selector === activeStoryGetById) {
        return TEST_STORY_1;
      }
    });
    (actions.getStoryIds as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => Promise.resolve([TEST_STORY_1.id, TEST_STORY_2.id]),
      })
    );
    (actions.getStoryById as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => Promise.resolve(TEST_STORY_1),
      })
    );
    (actions.getCommentById as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => Promise.resolve([]),
      })
    );
    (actions.addActiveStory as unknown as jest.Mock).mockImplementation(
      ({ id, story }) => ({
        type: actions.addActiveStory.type,
        payload: { id, story },
      })
    );
    (actions.addStoryComments as unknown as jest.Mock).mockImplementation(
      ({ id, comments }) => ({
        type: actions.addStoryComments.type,
        payload: { id, comments },
      })
    );
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
    const storyItem = await screen.findByTestId(
      TEST_ID.NEWS_PAGE.NEWS_ITEM_IN_LIST(TEST_STORY_1.id)
    );
    userEvent.click(storyItem);
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_PAGE_ROOT(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
  });
  test("back button click", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === newStoriesGet) {
        return [TEST_STORY_1, TEST_STORY_2];
      }
    });
    render(
      <TestRender
        baseRoutes={[SCREEN_ROUTES.START_PAGE, SCREEN_ROUTES.NEWS_LIST]}
      />
    );
    const backButton = await screen.findByTestId(TEST_ID.HEADER.BACK_BUTTON);
    userEvent.click(backButton);
    expect(
      await screen.findByTestId(TEST_ID.START_PAGE.START_PAGE_ROOT)
    ).toBeInTheDocument();
  });
  test("menu button click", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === newStoriesGet) {
        return [TEST_STORY_1, TEST_STORY_2];
      }
    });
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
    const menuButton = await screen.findByTestId(TEST_ID.HEADER.MENU_BUTTON);
    userEvent.click(menuButton);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ROOT)
    ).toBeInTheDocument();
  });
  test("news type switch", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation((selector) => {
      if (selector === getShowedStoryType) {
        return STORIES_SHOWED_TYPE.NEW;
      }
      if (selector === newStoriesGet) {
        return [];
      }
    });
    (actions.clearAllNestedComments as unknown as jest.Mock).mockImplementation(
      () => ({
        type: actions.clearAllNestedComments.type,
      })
    );
    (actions.clearAllStoryComments as unknown as jest.Mock).mockImplementation(
      () => ({
        type: actions.clearAllStoryComments.type,
      })
    );
    (actions.clearActiveStories as unknown as jest.Mock).mockImplementation(
      () => ({
        type: actions.clearActiveStories.type,
      })
    );
    (actions.setShowedStoryType as unknown as jest.Mock).mockImplementation(
      (type) => ({
        type: actions.setShowedStoryType.type,
        payload: type,
      })
    );
    (actions.getStoryIds as unknown as jest.Mock).mockImplementation(
      () => () => ({
        unwrap: () => new Promise(() => {}),
      })
    );
    render(<TestRender baseRoutes={[SCREEN_ROUTES.NEWS_LIST]} />);
    const menuButton = await screen.findByTestId(TEST_ID.HEADER.MENU_BUTTON);
    userEvent.click(menuButton);
    const topNewsItem = await screen.findByTestId(
      TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ITEM(STORIES_SHOWED_TYPE.TOP)
    );
    userEvent.click(topNewsItem);
    expect(
      screen.queryByTestId(TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ROOT)
    ).not.toBeInTheDocument();
    expect(
      await screen.findByTestId(TEST_ID.NEWS_SKELETON)
    ).toBeInTheDocument();
  });
});
