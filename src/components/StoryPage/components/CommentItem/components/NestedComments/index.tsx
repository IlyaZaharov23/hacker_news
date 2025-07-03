import { Box } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../../../../store/hooks";
import { nestedCommentsGetById } from "../../../../../../store/hackerNews/selectors";
import { NestedCommentItem } from "../NestedCommentItem";

type NestedCommentsPropsType = {
  commentId: number;
};

export const NestedComments: FC<NestedCommentsPropsType> = ({ commentId }) => {
  const nestedComments = useAppSelector((state) =>
    nestedCommentsGetById(state, commentId)
  );
  return (
    <Box>
      {nestedComments.map((comment) => (
        <NestedCommentItem key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};
