import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { storyCommentsGet } from "../../../../store/hackerNews/selectors";
import { CommentItem } from "../CommentItem";
import { styles } from "./styles";

export const Comments = () => {
  const comments = useAppSelector(storyCommentsGet);
  return (
    <Box sx={styles.commentsWrapper}>
      <Typography sx={styles.commentsTitle}>Comments:</Typography>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};
