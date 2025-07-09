import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { CustomDivider } from "components/CustomDivider";
import { SCREEN_ROUTES } from "routes/constants";
import { addActiveStory } from "store/hackerNews/actions";
import { useAppDispatch } from "store/hooks";
import { StoryType } from "types/componentTypes";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { UrlUtil } from "utiles/UrlUtil/UrlUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { styles } from "./styles";

type NewsItemPropsType = {
  item: StoryType;
};

export const NewsItem: FC<NewsItemPropsType> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goToStory = async (storyId: number) => {
    try {
      navigate(UrlUtil.generatePathWithId(SCREEN_ROUTES.NEWS_ITEM, storyId));
      dispatch(addActiveStory({ id: item.id, story: item }));
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
