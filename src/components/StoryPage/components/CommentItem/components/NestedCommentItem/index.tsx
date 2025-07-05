import { Box, Typography } from "@mui/material";

import { CommentType } from "../../../../../../types/componentTypes";
import { DateUtil } from "../../../../../../utiles/DateUtil";
import { FC } from "react";
import { styles } from "./styles";
import { CustomDivider } from "../../../../../CustomDivider";
import { DIVIDER_TYPE } from "../../../../../../constants/dividerTypes";
import { DeletedNestedComment } from "../DeletedNestedComment";

type NestedCommentItemPropsType = {
  comment: CommentType;
};

export const NestedCommentItem: FC<NestedCommentItemPropsType> = ({
  comment,
}) => {
  if (comment.deleted) return <DeletedNestedComment />;

  return (
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
  );
};
