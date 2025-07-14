import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SCREEN_ROUTES } from "routes/constants";
import { Header } from ".";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Header component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("app logo click", () => {
    render(<Header showUpdate showMenu />);
    const logo = screen.getByTestId("app-logo");
    userEvent.click(logo);
    expect(mockNavigate).toHaveBeenCalledWith(SCREEN_ROUTES.START_PAGE);
  });
});
