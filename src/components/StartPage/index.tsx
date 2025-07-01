import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressLoader } from "../ProgressLoader";
import { useAppDispatch } from "../../store/hooks";
import {
  getStoryById,
  setNewStories,
  getStoryIds,
} from "../../store/hackerNews/actions";
import { SCREEN_ROUTES } from "../../routes/constants";
import { styles } from "./styles";

function StartPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getStories = async (ids: number[]) => {
    const storyPromices = ids
      .slice(0, 100)
      .map((id) => dispatch(getStoryById(id)).unwrap());
    await Promise.all(storyPromices).then((res) =>
      dispatch(setNewStories(res))
    );
    navigate(SCREEN_ROUTES.NEWS_LIST);
  };

  const showAllNews = async () => {
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
  return (
    <Box sx={styles.pageWrapper}>
      <Typography>Welcome to Hacker News</Typography>
      <Button onClick={showAllNews} sx={styles.showNewsButton}>
        {isLoading ? <ProgressLoader /> : "Show News"}
      </Button>
    </Box>
  );
}

export default StartPage;
