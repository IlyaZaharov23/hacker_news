import { SCREEN_ROUTES } from "routes/constants";
import { UrlUtil } from "./UrlUtil";

describe("URL_UTIL_GENERATE_ROUTE_TEST", () => {
  test("correct ID paste", () => {
    expect(UrlUtil.generatePathWithId(SCREEN_ROUTES.NEWS_ITEM, 5)).toBe(
      `/story/5`
    );
  });
  test("negative ID paste", () => {
    expect(() =>
      UrlUtil.generatePathWithId(SCREEN_ROUTES.NEWS_ITEM, -5)
    ).toThrow("ID cannot be negative.");
  });
  test("zero ID paste", () => {
    expect(() =>
      UrlUtil.generatePathWithId(SCREEN_ROUTES.NEWS_ITEM, 0)
    ).toThrow("ID cannot be 0.");
  });
});

describe("URL_UTIL_CUT_ID_TEST", () => {
  delete (window as any).location;
  (window as any).location = {
    href: "https://example.com/path/to/resource",
    pathname: "/path/to/resource",
  };

  const replaceStateSpy = jest.spyOn(window.history, "replaceState");
  UrlUtil.cutIdFromUrl();
  expect(replaceStateSpy).toHaveBeenCalledWith({}, "", "/path/to");
  replaceStateSpy.mockRestore();
});

describe("URL_UTIL_GET_STORY_ID_TEST", () => {
  test("correct ID transformation from string to number", () => {
    expect(UrlUtil.getIdFromUrl("5")).toBe(5);
  });
  test("undefined ID param", () => {
    expect(UrlUtil.getIdFromUrl(undefined)).toBe(NaN);
  });
  test("not a number in string param", () => {
    expect(UrlUtil.getIdFromUrl("abs")).toBe(NaN);
  });
});

describe("URL_UTIL_GET_TEST_URL", () => {
  test("returns correct value", () => {
    expect(UrlUtil.getTestUrl(SCREEN_ROUTES.NEWS_ITEM, 777)).toBe("/story/777");
  });
});
