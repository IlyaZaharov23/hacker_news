import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";
import { TEST_ID } from "constants/testIds";
import { SCREEN_ROUTES } from "routes/constants";
import { TestRender } from "routes/testRender";

describe("START_PAGE_TEST", () => {
  test("page elements are rendered", async () => {
    render(<TestRender baseRoutes={[SCREEN_ROUTES.START_PAGE]} />);
    const pageRoot = await screen.findByTestId(
      TEST_ID.START_PAGE.START_PAGE_ROOT
    );
    const appLogo = screen.getByTestId(TEST_ID.START_PAGE.APP_LOGO);
    const goToNewsButton = screen.getByTestId(
      TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON
    );
    const actionsTitle = screen.getByTestId(TEST_ID.START_PAGE.ACTIONS_TITLE);
    const storiesTypeSwitcher = screen.getByTestId(
      TEST_ID.START_PAGE.SWITCHER_BUTTON
    );
    const footerRoot = screen.getByTestId(TEST_ID.START_PAGE.FOOTER_ROOT);
    expect(pageRoot).toBeInTheDocument();
    expect(appLogo).toBeInTheDocument();
    expect(goToNewsButton).toBeInTheDocument();
    expect(actionsTitle).toBeInTheDocument();
    expect(storiesTypeSwitcher).toBeInTheDocument();
    expect(footerRoot).toBeInTheDocument();
  });
  test("Navigate to news", async () => {
    render(<TestRender baseRoutes={[SCREEN_ROUTES.START_PAGE]} />);
    const button = await screen.findByTestId(
      TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON
    );
    userEvent.click(button);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_PAGE.NEWS_PAGE_ROOT)
    ).toBeInTheDocument();
  });
  test("Switcher click", async () => {
    render(<TestRender baseRoutes={[SCREEN_ROUTES.START_PAGE]} />);
    const switcherButton = screen.getByTestId(
      TEST_ID.START_PAGE.SWITCHER_BUTTON
    );
    userEvent.click(switcherButton);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ROOT)
    ).toBeInTheDocument();
    const topNewsItems = await screen.findByTestId(
      TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ITEM(STORIES_SHOWED_TYPE.TOP)
    );
    userEvent.click(topNewsItems);
    expect(
      screen.queryByTestId(TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ROOT)
    ).not.toBeInTheDocument();
  });
});
