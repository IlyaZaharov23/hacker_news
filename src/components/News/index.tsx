import { Box } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { newStoriesGet } from "../../store/hackerNews/selectors";
import { styles } from "./styles";
import { Header } from "../Header";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  getStoryById,
  setNewStories,
  getStoryIds,
} from "../../store/hackerNews/actions";
import { NewsItem } from "./components/NewsItem";
import { NewsSkeleton } from "./components/NewsSkeleton";
import { NewsPlaceholder } from "./components/NewsPlaceholder";

function News() {
  const news = useAppSelector(newStoriesGet);
  const dispatch = useAppDispatch();
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
      const ids = await dispatch(getStoryIds()).unwrap();
      await getStories(ids);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (news.length === 0) {
      showAllNews();
    }
  }, []);

  return (
    <Box sx={styles.mainWrapper}>
      <Header
        refreshNews={showAllNews}
        isLoading={isLoading}
        showBack
        showUpdate
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
