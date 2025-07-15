import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { useAppSelector } from "store/hooks";
import { storyCommentsGetById } from "store/hackerNews/selectors/storyCommentsGetById";
import { TEST_ID } from "constants/testIds";
import { CommentsPropsType } from "components/StoryPage/types";

import { CommentItem } from "../CommentItem";
import { CommentsSkeleton } from "../CommentsSkeleton";
import { CommentsPlaceholder } from "../CommentsPlaceholder";
import { styles } from "./styles";

export const Comments: FC<CommentsPropsType> = ({ storyId, isLoading }) => {
  const comments = useAppSelector((state) =>
    storyId ? storyCommentsGetById(state, storyId) : []
  );

  return (
    <Box
      sx={styles.commentsWrapper}
      data-testid={TEST_ID.COMMENTS.COMMENTS_ROOT(storyId)}
    >
      <Typography sx={styles.commentsTitle}>Comments:</Typography>
      <Box sx={styles.listWrapper}>
        {isLoading ? (
          <CommentsSkeleton />
        ) : !comments?.length ? (
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
