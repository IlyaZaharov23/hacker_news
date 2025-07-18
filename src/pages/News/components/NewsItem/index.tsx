import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { CustomDivider } from "components/CustomDivider";
import { SCREEN_ROUTES } from "routes/constants";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { UrlUtil } from "utiles/UrlUtil/UrlUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { TEST_ID } from "constants/testIds";
import { NewsItemPropsType } from "pages/News/types";
import { styles } from "./styles";

export const NewsItem: FC<NewsItemPropsType> = ({ item }) => {
  const navigate = useNavigate();

  const goToStory = async (storyId: number) => {
    try {
      navigate(UrlUtil.generatePathWithId(SCREEN_ROUTES.NEWS_ITEM, storyId));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      key={item.id}
      sx={styles.newsItemWrapper}
      onClick={() => goToStory(item.id)}
      data-testid={TEST_ID.NEWS_PAGE.NEWS_ITEM_IN_LIST(item.id)}
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
