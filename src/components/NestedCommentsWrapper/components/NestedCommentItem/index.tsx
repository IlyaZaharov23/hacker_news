import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { CustomDivider } from "components/CustomDivider";
import { CommentType } from "types/commonTypes";
import { DateUtil } from "utiles/DateUtil/DateUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";

import { DeletedNestedComment } from "../DeletedNestedComment";
import { styles } from "./styles";
import { NestedCommentsWrapper } from "components/NestedCommentsWrapper";

type NestedCommentItemPropsType = {
  comment: CommentType;
};

export const NestedCommentItem: FC<NestedCommentItemPropsType> = ({
  comment,
}) => {
  if (comment.deleted) return <DeletedNestedComment />;

  return (
    <>
      <Box sx={styles.commonWrapper}>
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
