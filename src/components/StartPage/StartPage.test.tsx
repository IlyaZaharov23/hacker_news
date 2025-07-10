import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TEST_ID } from "constants/testIds";
import { SCREEN_ROUTES } from "routes/constants";
import { TestRender } from "routes/testRender";

describe("START_PAGE_TEST", () => {
  test("page elements are rendered", async () => {
    render(<TestRender baseRoute={SCREEN_ROUTES.START_PAGE} />);
    const pageRoot = await screen.findByTestId(
      TEST_ID.START_PAGE.START_PAGE_ROOT
    );
    const appLogo = screen.getByTestId(TEST_ID.START_PAGE.APP_LOGO);
    const appTitle = screen.getByTestId(TEST_ID.START_PAGE.APP_TITLE);
    const goToNewsButton = screen.getByTestId(
      TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON
    );
    expect(pageRoot).toBeInTheDocument();
    expect(appLogo).toBeInTheDocument();
    expect(appTitle).toBeInTheDocument();
    expect(goToNewsButton).toBeInTheDocument();
  });
  test("navigate to news", async () => {
    render(<TestRender baseRoute={SCREEN_ROUTES.START_PAGE} />);
    const button = await screen.findByTestId(
      TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON
    );
    userEvent.click(button);
    expect(
      await screen.findByTestId(TEST_ID.NEWS_PAGE.NEWS_PAGE_ROOT)
    ).toBeInTheDocument();
  });
  test("matches snapshot", () => {
    const { asFragment } = render(
      <TestRender baseRoute={SCREEN_ROUTES.START_PAGE} />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
