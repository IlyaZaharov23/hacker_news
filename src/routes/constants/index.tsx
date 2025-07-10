import { lazy } from "react";

const NewsList = lazy(() => import("../../components/News"));
const StartPage = lazy(() => import("../../components/StartPage"));
const StoryPage = lazy(() => import("../../components/StoryPage"));

const SCREEN_NAMES = {
  START_PAGE: "START_PAGE",
  NEWS_LIST: "NEWS_LIST",
  NEWS_ITEMS: "NEWS_ITEM",
};

export const SCREEN_ROUTES = {
  START_PAGE: "/",
  NEWS_LIST: "/news",
  NEWS_ITEM: "/story/:id",
};

const routes = [
  {
    name: SCREEN_NAMES.START_PAGE,
    key: "start_page",
    path: SCREEN_ROUTES.START_PAGE,
    component: <StartPage />,
  },
  {
    name: SCREEN_NAMES.NEWS_LIST,
    key: "news_list",
    path: SCREEN_ROUTES.NEWS_LIST,
    component: <NewsList />,
  },
  {
    name: SCREEN_NAMES.NEWS_ITEMS,
    key: "news_item",
    path: SCREEN_ROUTES.NEWS_ITEM,
    component: <StoryPage />,
  },
];

export default routes;
