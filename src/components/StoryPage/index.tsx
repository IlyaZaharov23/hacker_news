import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { activeStoriesGet } from "store/hackerNews/selectors/activeStoriesGet";
import {
  getStoryById,
  getCommentById,
  addStoryComments,
  addActiveStory,
} from "store/hackerNews/actions";
import { UrlUtil } from "utiles/UrlUtil/UrlUtil";
import { TEST_ID } from "constants/testIds";
import { StoryType } from "types/commonTypes";

import { Comments } from "./components/Comments";
import { StoryHeader } from "./components/StoryHeader";
import { Header } from "../Header";
import { getStoriesIds } from "./utiles/getStoriesIds";
import { styles } from "./styles";

function StoryPage() {
  const params = useParams();
  const activeStories = useAppSelector(activeStoriesGet);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getStoryComments = async (ids: number[]) => {
    try {
      if (!ids) return;
      const idsPromices = ids.map((id) =>
        dispatch(getCommentById(id)).unwrap()
      );
      await Promise.all(idsPromices).then((res) => {
        dispatch(addStoryComments({ id: Number(params.id), comments: res }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentStory = async () => {
    try {
      setIsLoading(true);
      const currentId = UrlUtil.getIdFromUrl(params.id);
      const res: StoryType = await dispatch(getStoryById(currentId)).unwrap();
      dispatch(addActiveStory({ id: res.id, story: res }));
      await getStoryComments(res.kids || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!getStoriesIds(activeStories).includes(params.id || "")) {
      getCurrentStory();
    }
  }, []);

  return (
    <Box
      sx={styles.commonWrapper}
      data-testid={TEST_ID.STORY_PAGE.STORY_PAGE_ROOT(Number(params.id))}
    >
      <Header showBack />
      <Box sx={styles.contentWrapper}>
        <StoryHeader isLoading={isLoading} />
        <Comments storyId={Number(params.id)} isLoading={isLoading} />
      </Box>
    </Box>
  );
}

export default StoryPage;
