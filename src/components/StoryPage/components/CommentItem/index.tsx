import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { CustomDivider } from "components/CustomDivider";
import { CommentType } from "types/commonTypes";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { NestedCommentsWrapper } from "components/NestedCommentsWrapper";

import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

type PropsType = {
  comment: CommentType;
};

export const CommentItem: FC<PropsType> = ({ comment }) => {
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
