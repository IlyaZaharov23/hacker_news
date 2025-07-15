import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { CustomDivider } from "components/CustomDivider";
import { NestedCommentsWrapper } from "components/NestedCommentsWrapper";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { TEST_ID } from "constants/testIds";
import { WrapperPropsType } from "components/NestedCommentsWrapper/types";

import { DeletedNestedComment } from "../DeletedNestedComment";
import { styles } from "./styles";

export const NestedCommentItem: FC<WrapperPropsType> = ({ comment }) => {
  if (comment.deleted) return <DeletedNestedComment />;

  return (
    <>
      <Box
        sx={styles.commonWrapper}
        data-testid={TEST_ID.COMMENTS.COMMENT_ITEM(comment.id)}
      >
        <Box sx={styles.commentInfoWrapper}>
          <Typography sx={styles.commentAuthor}>{comment.by}</Typography>
          <Typography sx={styles.commentDate}>
            {DateUtil.formatTimeAgo(comment.time)}
          </Typography>
        </Box>
        <CustomDivider position={DIVIDER_TYPE.HORIZONTAL} />
        <Typography sx={styles.commentTitle}>{comment.text}</Typography>
      </Box>
      <NestedCommentsWrapper comment={comment} />
    </>
  );
};
