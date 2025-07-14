import { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { CustomDivider } from "components/CustomDivider";
import { useAppSelector } from "store/hooks";
import { activeStoryGetById } from "store/hackerNews/selectors/activeStoryGetById";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { TEST_ID } from "constants/testIds";

import { HeaderSkeleton } from "../HeaderSkeleton";
import { StoryPageHeaderPropsType } from "components/StoryPage/types";
import { styles } from "../../styles";

export const StoryHeader: FC<StoryPageHeaderPropsType> = ({ isLoading }) => {
  const params = useParams();

  const activeStory = useAppSelector((state) =>
    activeStoryGetById(state, Number(params.id))
  );
  const handleRedirectToStory = () => {
    window.open(activeStory?.url);
  };

  return (
    <Box
      sx={styles.storyWrapper}
      data-testid={TEST_ID.STORY_PAGE.STORY_HEADER(Number(params.id))}
    >
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
        <>
          <Box sx={styles.topWrapper}>
            <Typography
              sx={styles.title}
              data-testid={TEST_ID.STORY_PAGE.STORY_HEADER_TITLE(
                activeStory?.id
              )}
            >
              {activeStory?.title}
            </Typography>
            <OpenInNewIcon
              onClick={handleRedirectToStory}
              sx={styles.redirectIcon}
              data-testid={TEST_ID.STORY_PAGE.STORY_HEADER_REDIRECT_TO_STORY(
                activeStory?.id
              )}
            />
          </Box>
          <Box sx={styles.bottomWrapper}>
            <Box sx={styles.categoryWrapper}>
              <Typography sx={{ ...styles.info, ...styles.category }}>
                Published:
              </Typography>
              <Typography
                sx={styles.info}
                data-testid={TEST_ID.STORY_PAGE.STORY_HEADER_PUBLISHED(
                  activeStory?.id
                )}
              >
                {activeStory?.time
                  ? DateUtil.formatTimeAgo(activeStory?.time)
                  : ""}
              </Typography>
            </Box>
            <CustomDivider position={DIVIDER_TYPE.VERTICAL} height={24} />
            <Box sx={styles.categoryWrapper}>
              <Typography sx={{ ...styles.info, ...styles.category }}>
                Author:
              </Typography>
              <Typography
                sx={styles.info}
                data-testid={TEST_ID.STORY_PAGE.STORY_HEADER_AUTHOR(
                  activeStory?.id
                )}
              >
                {activeStory?.by}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
