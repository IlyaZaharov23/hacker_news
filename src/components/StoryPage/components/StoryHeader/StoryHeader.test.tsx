import { render, screen } from "@testing-library/react";
import { StoryHeader } from ".";
import * as hooks from "store/hooks";
import { TEST_STORY_1 } from "store/hackerNews/testContants";
import { TEST_ID } from "constants/testIds";

describe("Story Header component test", () => {
  beforeAll(() => {
    jest
      .spyOn(hooks, "useAppSelector")
      .mockImplementation((selector) => TEST_STORY_1);
  });
  test("StoryHeader skeleton render", async () => {
    render(<StoryHeader isLoading={true} />);
    expect(
      await screen.findByTestId(TEST_ID.STORY_PAGE.STORY_HEADER_SKELETON)
    ).toBeInTheDocument();
  });
  test("Story Header data render", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
    render(<StoryHeader isLoading={false} />);
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_HEADER_TITLE(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_HEADER_AUTHOR(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_HEADER_PUBLISHED(TEST_STORY_1.id)
      )
    ).toBeInTheDocument();
  });
});
