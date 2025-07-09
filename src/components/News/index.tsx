import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { useAppSelector, useAppDispatch } from "store/hooks";
import {
  getStoryById,
  setNewStories,
  getStoryIds,
} from "store/hackerNews/actions";
import { newStoriesGet } from "store/hackerNews/selectors/newStoriesGet";
import { getShowedStoryType } from "store/hackerNews/selectors/getShowedStoryType";
import { storiesTypeConfig } from "./storiesTypeConfig";

import { Header } from "../Header";
import { NewsItem } from "./components/NewsItem";
import { NewsSkeleton } from "./components/NewsSkeleton";
import { NewsPlaceholder } from "./components/NewsPlaceholder";
import { styles } from "./styles";

function News() {
  const news = useAppSelector(newStoriesGet);
  const storiesShowedType = useAppSelector(getShowedStoryType);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getStories = async (ids: number[]) => {
    const storyPromices = ids
      .slice(0, 100)
      .map((id) => dispatch(getStoryById(id)).unwrap());
    await Promise.all(storyPromices).then((res) =>
      dispatch(setNewStories(res))
    );
  };

  const showAllNews = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const ids = await dispatch(
        getStoryIds(storiesTypeConfig[storiesShowedType])
      ).unwrap();
      await getStories(ids);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location.state?.fromBack) {
      navigate(".", { state: { fromBack: false }, replace: true });
    }
    if (!location.state?.fromBack || news.length === 0) {
      showAllNews();
    }
  }, [storiesShowedType]);

  return (
    <Box sx={styles.mainWrapper}>
      <Header
        refreshNews={showAllNews}
        isLoading={isLoading}
        showBack
        showUpdate
        showMenu
      />
      <Box
        sx={{
          ...styles.contentWrapper,
          ...(isLoading && styles.loadingWrapper),
        }}
      >
        <Box sx={styles.listWrapper}>
          {isLoading ? (
            <NewsSkeleton />
          ) : news.length === 0 && !isLoading ? (
            <NewsPlaceholder />
          ) : (
            news.map((item) => <NewsItem key={item.id} item={item} />)
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default News;
