export const TEST_ID = {
  START_PAGE: {
    START_PAGE_ROOT: "start-page-root",
    GO_TO_NEWS_BUTTON: "go-to-news-button",
    APP_LOGO: "app-logo",
    APP_TITLE: "app-title",
  },
  NEWS_PAGE: {
    NEWS_PAGE_ROOT: "news-page-root",
    NEWS_ITEM_IN_LIST: (id: number | undefined) => `news-list-in-list-${id}`,
  },
  STORY_PAGE: {
    STORY_PAGE_ROOT: (id: number | undefined) => `story-page-root-${id}`,
  },
  HEADER: {
    HEADER_ROOT: "header-root",
    BACK_BUTTON: "back-button",
    UPDATE_BUTTON: "update-button",
    MENU_BUTTON: "menu-button",
    APP_LOGO: "app-logo",
  },
  NEWS_SKELETON: "news-skeleton",
  NEWS_PLACEHOLDER: "news-placeholder",
};
