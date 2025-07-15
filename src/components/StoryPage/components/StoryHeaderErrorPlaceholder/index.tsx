import { Box, Typography } from "@mui/material";
import storyHeaderError from "assets/storyHeaderError.svg";
import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

export const StoryHeaderErrorPlaceholder = () => {
  return (
    <Box
      sx={styles.errorWrapper}
      data-testid={TEST_ID.STORY_PAGE.STORY_HEADER_ERROR_PLACEHOLDER}
    >
      <img src={storyHeaderError} alt="story-header-error" width={64} />
      <Typography sx={styles.title}>
        News details are playing hide and seek! We'll refresh and try to find
        them again.
      </Typography>
    </Box>
  );
};
