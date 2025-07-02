import { Box, Typography, Button } from "@mui/material";
import { styles } from "./styles";
import { CommentType } from "../../../../types/componentTypes";
import { FC } from "react";
import { CustomDivider } from "../../../CustomDivider";
import { DateUtil } from "../../../../utiles/DateUtil";
import { DIVIDER_TYPE } from "../../../../constants/dividerTypes";

type PropsType = {
  comment: CommentType;
};

export const CommentItem: FC<PropsType> = ({ comment }) => {
  return (
    <Box sx={styles.commentWrapper}>
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
      {comment.kids && comment.kids.length > 0 && (
        <Box sx={styles.buttonWrapper}>
          <Button sx={styles.button}>
            Show {comment.kids.length} nested comments
          </Button>
        </Box>
      )}
    </Box>
  );
};
