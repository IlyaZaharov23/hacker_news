import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Header } from "../Header";
import { styles } from "./styles";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { activeStoryGetById } from "../../store/hackerNews/selectors";
import {
  getStoryById,
  getCommentById,
  addStoryComments,
  addActiveStory,
  removeActiveStory,
} from "../../store/hackerNews/actions";
import { useEffect, useState } from "react";
import { UrlUtil } from "../../utiles/UrlUtil";
import { Comments } from "./components/Comments";
import { StoryHeader } from "./components/StoryHeader";

function StoryPage() {
  const params = useParams();
  const activeStory = useAppSelector((state) =>
    activeStoryGetById(state, Number(params.id))
  );
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getStoryComments = async (ids: number[]) => {
    try {
      const idsPromices = ids.map((id) =>
        dispatch(getCommentById(id)).unwrap()
      );
      await Promise.all(idsPromices).then((res) => {
        dispatch(addStoryComments({ id: params.id, comments: res }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentStory = async () => {
    try {
      setIsLoading(true);
      const currentId = UrlUtil.getIdFromUrl(params.id);
      const res = await dispatch(getStoryById(currentId)).unwrap();
      await getStoryComments(res.kids);
      dispatch(addActiveStory({ id: res.id, story: res }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrentStory();
    return () => {
      if (window.location.pathname.includes("news")) {
        dispatch(removeActiveStory(params.id));
      }
    };
  }, []);

  return (
    <Box sx={styles.commonWrapper}>
      <Header showBack />
      <Box sx={styles.contentWrapper}>
        <StoryHeader isLoading={isLoading} />
        <Comments storyId={activeStory?.id} isLoading={isLoading} />
      </Box>
    </Box>
  );
}

export default StoryPage;
