import { render, screen } from "@testing-library/react";
import * as hooks from "store/hooks";
import { TEST_STORY_1 } from "store/hackerNews/testContants";
import { TEST_ID } from "constants/testIds";
import { StoryHeader } from ".";

describe("Story Header component test", () => {
  beforeAll(() => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
  });
  test("StoryHeader skeleton render", async () => {
    render(<StoryHeader isLoading={true} hasError={false} />);
    expect(
      await screen.findByTestId(TEST_ID.STORY_PAGE.STORY_HEADER_SKELETON)
    ).toBeInTheDocument();
  });
  test("Story Header data render", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
    render(<StoryHeader isLoading={false} hasError={false} />);
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
  test("Story Header data error", async () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => TEST_STORY_1);
    render(<StoryHeader isLoading={false} hasError={true} />);
    expect(
      await screen.findByTestId(
        TEST_ID.STORY_PAGE.STORY_HEADER_ERROR_PLACEHOLDER
      )
    ).toBeInTheDocument();
  });
});
