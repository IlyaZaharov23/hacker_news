import { FC } from "react";
import { Box, Typography } from "@mui/material";
import emptyCommentsList from "assets/emptyCommentsList.svg";
import errorPlaceholder from "assets/errorPlaceholder.svg";
import { TEST_ID } from "constants/testIds";
import { styles } from "./styles";
import { CommentsPlaceholderPropsType } from "./types";

export const CommentsPlaceholder: FC<CommentsPlaceholderPropsType> = ({
  hasError,
}) => {
  return (
    <Box
      sx={styles.placeholderWrapper}
      data-testid={
        hasError
          ? TEST_ID.COMMENTS.COMMENTS_ERROR_PLACEHOLDER
          : TEST_ID.COMMENTS.COMMENTS_PLACEHOLDER
      }
    >
      <img
        src={hasError ? errorPlaceholder : emptyCommentsList}
        alt="empty-comments"
        width={200}
      />
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.text}>
          {hasError ? "Oops! Comments went on a break." : "No comments yet."}
        </Typography>
        <Typography sx={styles.text}>
          {hasError
            ? "We're having trouble loading them. Please try again later."
            : "They will appear once published."}
        </Typography>
      </Box>
    </Box>
  );
};
