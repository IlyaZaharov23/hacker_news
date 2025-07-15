import { TEST_ID } from "constants/testIds";
import { Footer } from ".";
import { render, screen } from "@testing-library/react";

describe("Start page footer test", () => {
  test("Skeleton render", async () => {
    render(<Footer isLoading={true} quote={{ author: "", text: "" }} />);
    expect(
      await screen.findByTestId(TEST_ID.START_PAGE.FOOTER_QUOTE_SKELETON)
    ).toBeInTheDocument();
  });
  test("Quote render", async () => {
    render(
      <Footer
        isLoading={false}
        quote={{ author: "Elistar", text: "Some text" }}
      />
    );
    expect(
      await screen.findByTestId(TEST_ID.START_PAGE.FOOTER_QUOTE_TEXT)
    ).toBeInTheDocument();
  });
});
