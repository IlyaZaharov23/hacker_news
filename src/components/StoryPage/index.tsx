import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Header } from "../Header";
import { styles } from "./styles";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { activeStoryGet } from "../../store/hackerNews/selectors";
import {
  setActiveStory,
  getStoryById,
  getCommentById,
  setStoryComments,
} from "../../store/hackerNews/actions";
import { useEffect, useState } from "react";
import { UrlUtil } from "../../utiles/UrlUtil";
import { ProgressLoader } from "../ProgressLoader";
import { DateUtil } from "../../utiles/DateUtil";
import { Comments } from "./components/Comments";
import { CustomDivider } from "../CustomDivider";
import { DIVIDER_TYPE } from "../../constants/dividerTypes";

function StoryPage() {
  const params = useParams();
  const activeStory = useAppSelector(activeStoryGet);
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
        dispatch(setStoryComments(res));
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
          dispatch(setActiveStory(res));
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
  });

  return (
    <Box sx={styles.commonWrapper}>
      <Header showBack />
      {isLoading ? (
        <ProgressLoader fullScreen />
      ) : (
        <>
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
          <Comments />
        </>
      )}
    </Box>
  );
}

export default StoryPage;
