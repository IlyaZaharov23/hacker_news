import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "components/Header";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { activeStoriesGet } from "store/hackerNews/selectors/activeStoriesGet";
import {
  getStoryById,
  getCommentById,
  addStoryComments,
  addActiveStory,
} from "store/hackerNews/actions";
import { UrlUtil } from "utiles/UrlUtil/UrlUtil";
import { ObjectUtil } from "utiles/ObjectUtil/ObjectUtil";
import { TEST_ID } from "constants/testIds";
import { StoryType } from "types/commonTypes";

import { Comments } from "./components/Comments";
import { StoryHeader } from "./components/StoryHeader";
import { styles } from "./styles";

function StoryPage() {
  const params = useParams();
  const activeStories = useAppSelector(activeStoriesGet);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasStoryError, setHasStoryError] = useState<boolean>(false);
  const [hasCommentsError, setHasCommentsError] = useState<boolean>(false);

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
      setHasCommentsError(true);
    }
  };

  const getCurrentStory = async () => {
    try {
      setHasStoryError(false);
      setHasCommentsError(false);
      setIsLoading(true);
      const currentId = UrlUtil.getIdFromUrl(params.id);
      const res: StoryType = await dispatch(getStoryById(currentId)).unwrap();
      dispatch(addActiveStory({ id: res.id, story: res }));
      await getStoryComments(res.kids || []);
    } catch (error) {
      setHasStoryError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!ObjectUtil.getObjectKeys(activeStories).includes(params.id || "")) {
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
        <StoryHeader isLoading={isLoading} hasError={hasStoryError} />
        <Comments
          storyId={Number(params.id)}
          isLoading={isLoading}
          hasError={hasCommentsError || hasStoryError}
        />
      </Box>
    </Box>
  );
}

export default StoryPage;
