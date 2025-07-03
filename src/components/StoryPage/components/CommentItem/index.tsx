import { Box, Typography, Button } from "@mui/material";
import { styles } from "./styles";
import { CommentType } from "../../../../types/componentTypes";
import {
  getCommentById,
  addNestedCommentsById,
  removeNestedComments,
} from "../../../../store/hackerNews/actions";
import { FC, useState } from "react";
import { CustomDivider } from "../../../CustomDivider";
import { DateUtil } from "../../../../utiles/DateUtil";
import { DIVIDER_TYPE } from "../../../../constants/dividerTypes";
import { useAppDispatch } from "../../../../store/hooks";
import { ProgressLoader } from "../../../ProgressLoader";
import { NestedComments } from "./components/NestedComments";

type PropsType = {
  comment: CommentType;
};

export const CommentItem: FC<PropsType> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nestedCommentsIds, setNestedCommentsIds] = useState<number[]>([]);

  const addCommentIdToNestedList = (id: number) => {
    setNestedCommentsIds((prev) => [...prev, id]);
  };

  const deleteCommentIdFromNestedList = (id: number) => {
    const newNestedIdList = nestedCommentsIds.filter(
      (commentId) => commentId !== id
    );
    setNestedCommentsIds(newNestedIdList);
    dispatch(removeNestedComments(id));
  };

  const loadNestedComments = async (ids: number[]) => {
    try {
      setIsLoading(true);
      const idsPromise = ids.map((id) => dispatch(getCommentById(id)).unwrap());
      await Promise.all(idsPromise).then((res) => {
        dispatch(addNestedCommentsById({ id: comment.id, comments: res }));
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (ids: number[], commentId: number) => {
    if (nestedCommentsIds.includes(commentId)) {
      deleteCommentIdFromNestedList(commentId);
    } else {
      await loadNestedComments(ids);
      addCommentIdToNestedList(commentId);
    }
  };

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
          {isLoading ? (
            <ProgressLoader size={24} />
          ) : (
            <Box sx={styles.nestedCommentsWrapper}>
              {nestedCommentsIds.includes(comment.id) && (
                <NestedComments commentId={comment.id} />
              )}
              <Button
                sx={styles.button}
                onClick={() => handleClick(comment.kids ?? [], comment.id)}
              >
                {nestedCommentsIds.includes(comment.id)
                  ? "Hide nested comments"
                  : `Show ${comment.kids.length} nested comments`}
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
