import { FC } from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "store/hooks";
import { nestedCommentsGetById } from "store/hackerNews/selectors/nestedCommentsGetById";
import { TEST_ID } from "constants/testIds";
import { NestedCommentsPropsType } from "components/NestedCommentsWrapper/types";
import { NestedCommentItem } from "../NestedCommentItem";

export const NestedComments: FC<NestedCommentsPropsType> = ({ commentId }) => {
  const nestedComments = useAppSelector((state) =>
    nestedCommentsGetById(state, commentId)
  );
  return (
    <Box
      width="100%"
      data-testid={TEST_ID.COMMENTS.NESTED_COMMENTS_ROOT(commentId)}
    >
      {nestedComments.map((comment) => (
        <NestedCommentItem key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};
