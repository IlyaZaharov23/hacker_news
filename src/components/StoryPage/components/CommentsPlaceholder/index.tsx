import { Box, Typography } from "@mui/material";
import emptyCommentsList from "assets/emptyCommentsList.svg";
import { TEST_ID } from "constants/testIds";
import { styles } from "./styles";

export const CommentsPlaceholder = () => {
  return (
    <Box
      sx={styles.placeholderWrapper}
      data-testid={TEST_ID.COMMENTS.COMMENTS_PLACEHOLDER}
    >
      <img src={emptyCommentsList} alt="empty-comments" width={200} />
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.text}>No comments yet.</Typography>
        <Typography sx={styles.text}>
          They will appear once published.
        </Typography>
      </Box>
    </Box>
  );
};
