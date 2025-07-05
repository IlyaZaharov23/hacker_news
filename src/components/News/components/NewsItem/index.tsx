import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { StoryType } from "../../../../types/componentTypes";
import { DateUtil } from "../../../../utiles/DateUtil";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import { UrlUtil } from "../../../../utiles/UrlUtil";
import { SCREEN_ROUTES } from "../../../../routes/constants";
import {
  getCommentById,
  addStoryComments,
  addActiveStory,
} from "../../../../store/hackerNews/actions";
import { useAppDispatch } from "../../../../store/hooks";
import { CustomDivider } from "../../../CustomDivider";
import { DIVIDER_TYPE } from "../../../../constants/dividerTypes";

type NewsItemPropsType = {
  item: StoryType;
};

export const NewsItem: FC<NewsItemPropsType> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getStoryComments = async (ids: number[] | undefined) => {
    try {
      const idsPromices = ids?.map((id) =>
        dispatch(getCommentById(id)).unwrap()
      );
      await Promise.all(idsPromices || []).then((res) => {
        dispatch(addStoryComments({ id: item.id, comments: res }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const goToStory = async (storyId: number) => {
    try {
      navigate(UrlUtil.generatePathWithId(SCREEN_ROUTES.NEWS_ITEM, storyId));
      dispatch(addActiveStory({ id: item.id, story: item }));
      getStoryComments(item.kids);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      key={item.id}
      sx={styles.newsItemWrapper}
      onClick={() => goToStory(item.id)}
    >
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.storyTitle}>{item.title}</Typography>
      </Box>
      <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
      <Box sx={styles.newsInfoWrapper}>
        <Box sx={styles.infoItemWrapper}>
          <Typography sx={{ ...styles.infoTitle, ...styles.categoryTitle }}>
            The Author:
          </Typography>
          <Typography sx={styles.infoTitle}>{item.by}</Typography>
        </Box>
        <Box sx={styles.infoItemWrapper}>
          <Typography sx={{ ...styles.infoTitle, ...styles.categoryTitle }}>
            Rating:
          </Typography>
          <Typography sx={styles.infoTitle}>{item.score}</Typography>
        </Box>
        <Box sx={styles.infoItemWrapper}>
          <Typography sx={{ ...styles.infoTitle, ...styles.categoryTitle }}>
            Published:
          </Typography>
          <Typography sx={styles.infoTitle}>
            {DateUtil.formatTimeAgo(item.time)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
