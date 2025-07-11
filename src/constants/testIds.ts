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
    STORY_HEADER: (id: number | undefined) => `story-header-${id}`,
  },
  COMMENTS: {
    COMMENTS_ROOT: (id: number | undefined) => `comments-root-${id}`,
    COMMENT_ITEM: (id: number | undefined) => `comment-item-${id}`,
    SHOW_NESTED_COMMENS_BUTTON: (id: number | undefined) =>
      `show-nested-comments-button-${id}`,
    HIDE_NESTED_COMMENTS_BUTTON: (id: number | undefined) =>
      `hide-nested-comments-button-${id}`,
    NESTED_COMMENTS_ROOT: (id: number | undefined) =>
      `nested-comments-root-${id}`,
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
  NEWS_TYPE_SWITCHER: {
    SWITCHER_ROOT: "switcher-root",
    SWITCHER_ITEM: (type: string) => `switcher-item-${type}`,
  },
};
