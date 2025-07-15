import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { CustomDivider } from "components/CustomDivider";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { NestedCommentsWrapper } from "components/NestedCommentsWrapper";
import { TEST_ID } from "constants/testIds";
import { CommentItemPropsType } from "components/StoryPage/types";

import { styles } from "./styles";

export const CommentItem: FC<CommentItemPropsType> = ({ comment }) => {
  return (
    <Box
      sx={styles.commentWrapper}
      data-testid={TEST_ID.COMMENTS.COMMENT_ITEM(comment.id)}
    >
      <Box sx={styles.commentInfoWrapper}>
        <Typography sx={styles.commentAuthor}>{comment.by}</Typography>
        <Typography sx={styles.commentDate}>
          {DateUtil.formatTimeAgo(comment.time)}
        </Typography>
      </Box>
      <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
      <Box>
        <Typography sx={styles.commentTitle}>{comment.text}</Typography>
      </Box>
      <NestedCommentsWrapper comment={comment} />
    </Box>
  );
};
