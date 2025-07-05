import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
import { DateUtil } from "../../utiles/DateUtil";
import { Comments } from "./components/Comments";
import { CustomDivider } from "../CustomDivider";
import { DIVIDER_TYPE } from "../../constants/dividerTypes";

function StoryPage() {
  const params = useParams();
  const activeStory = useAppSelector((state) =>
    activeStoryGetById(state, Number(params.id))
  );
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRedirectToStory = () => {
    window.open(activeStory?.url);
  };

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
      await dispatch(getStoryById(currentId))
        .unwrap()
        .then((res) => {
          getStoryComments(res.kids);
          dispatch(addActiveStory({ id: res.id, story: res }));
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!activeStory) {
      getCurrentStory();
    }
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
        <Box sx={styles.storyWrapper}>
          <Box sx={styles.topWrapper}>
            <Typography sx={styles.title}>{activeStory?.title}</Typography>
            <OpenInNewIcon
              onClick={handleRedirectToStory}
              sx={styles.redirectIcon}
            />
          </Box>
          <Box sx={styles.bottomWrapper}>
            <Box sx={styles.categoryWrapper}>
              <Typography sx={{ ...styles.info, ...styles.category }}>
                Published:
              </Typography>
              <Typography sx={styles.info}>
                {activeStory?.time
                  ? DateUtil.formatTimeAgo(activeStory?.time)
                  : ""}
              </Typography>
            </Box>
            <CustomDivider position={DIVIDER_TYPE.VERTICAL} />
            <Box sx={styles.categoryWrapper}>
              <Typography sx={{ ...styles.info, ...styles.category }}>
                Author:
              </Typography>
              <Typography sx={styles.info}>{activeStory?.by}</Typography>
            </Box>
          </Box>
        </Box>
        <Comments storyId={activeStory?.id} isLoading={isLoading} />
      </Box>
    </Box>
  );
}

export default StoryPage;
