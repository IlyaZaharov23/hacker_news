import { FC } from "react";
import { Box, Typography } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { CustomButton } from "components/CustomButton";
import errorPlaceholder from "assets/errorPlaceholder.svg";
import { NestedCommentsErrorPlaceholderPropsType } from "./types";
import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

export const NestedCommentsErrorPlaceholder: FC<
  NestedCommentsErrorPlaceholderPropsType
> = ({ loadNestedComments, kids, commentId }) => {
  return (
    <Box
      sx={styles.placeholderWrapper}
      data-testid={TEST_ID.COMMENTS.NESTED_COMMENTS_ERROR_PLACEHOLDER(
        commentId
      )}
    >
      <CustomButton
        startIcon={<UpdateIcon />}
        onClick={() => loadNestedComments(kids ?? [])}
        data-testid={TEST_ID.COMMENTS.RELOAD_NESTED_COMMENTS_BUTTON(commentId)}
      >
        Reload {kids.length} Nested Comments
      </CustomButton>
      <img
        style={styles.img}
        src={errorPlaceholder}
        alt="error-placeholder"
        width={200}
      />
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.text}>
          Oops! Nested comments went on a break.
        </Typography>
        <Typography sx={styles.text}>
          We're having trouble loading them. Please try again later.
        </Typography>
      </Box>
    </Box>
  );
};
