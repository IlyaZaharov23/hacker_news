import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { storyCommentsGetById } from "../../../../store/hackerNews/selectors";
import { CommentItem } from "../CommentItem";
import { styles } from "./styles";
import { FC } from "react";
import { CommentsSkeleton } from "../CommentsSkeleton";
import { CommentsPlaceholder } from "../CommentsPlaceholder";

type CommentsPropsType = {
  storyId: number | undefined;
  isLoading: boolean;
};

export const Comments: FC<CommentsPropsType> = ({ storyId, isLoading }) => {
  const comments = useAppSelector((state) =>
    storyId ? storyCommentsGetById(state, storyId) : []
  );
  
  return (
    <Box sx={styles.commentsWrapper}>
      <Typography sx={styles.commentsTitle}>Comments:</Typography>
      <Box sx={styles.listWrapper}>
        {isLoading ? (
          <CommentsSkeleton />
        ) : comments?.length === 0 ? (
          <CommentsPlaceholder />
        ) : (
          comments?.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </Box>
    </Box>
  );
};
