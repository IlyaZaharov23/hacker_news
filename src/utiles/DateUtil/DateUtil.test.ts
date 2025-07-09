import { DateUtil } from "./DateUtil";

describe("DATE_UTIL_UNIT_TEST", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test("1 second case", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 1;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("1 second ago");
  });
  test("seconds limit test", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 59;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("59 seconds ago");
  });
  test("1 minute case", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 60;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("1 minute ago");
  });
  test("minutes limit test", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 3599;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("59 minutes ago");
  });
  test("1 hour case", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 3600;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("1 hour ago");
  });
  test("hours limit test", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 86399;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("23 hours ago");
  });
  test("1 day case", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 86400;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("1 day ago");
  });
  test("more than one day", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) - 691199;
    expect(DateUtil.formatTimeAgo(timestampInSeconds)).toBe("7 days ago");
  });
  test("negative timestamp case", () => {
    expect(() => DateUtil.formatTimeAgo(-1)).toThrow(
      "Timestamp cannot be negative"
    );
  });
  test("future time case", () => {
    const now = Date.now();
    const timestampInSeconds = Math.floor(now / 1000) + 1000;
    expect(() => DateUtil.formatTimeAgo(timestampInSeconds)).toThrow(
      "Timestamp cannot be negative"
    );
  });
});
