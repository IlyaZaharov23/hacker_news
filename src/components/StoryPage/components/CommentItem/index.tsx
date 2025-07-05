import { FC, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { ProgressLoader } from "components/ProgressLoader";
import { CustomDivider } from "components/CustomDivider";
import {
  getCommentById,
  addNestedCommentsById,
  removeNestedComments,
} from "store/hackerNews/actions";
import { useAppDispatch } from "store/hooks";
import { CommentType } from "types/componentTypes";
import { DateUtil } from "utiles/DateUtil";
import { DIVIDER_TYPE } from "constants/dividerTypes";

import { NestedComments } from "./components/NestedComments";
import { styles } from "./styles";

type PropsType = {
  comment: CommentType;
};

export const CommentItem: FC<PropsType> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nestedCommentsIds, setNestedCommentsIds] = useState<number[]>([]);

  const isNestedHidden = !nestedCommentsIds.includes(comment.id);

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
      addCommentIdToNestedList(comment.id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
            <Box ml="4rem">
              <ProgressLoader size={32} />
            </Box>
          ) : (
            <Box
              sx={{
                ...styles.nestedCommentsWrapper,
                ...(isNestedHidden && styles.hiddenNestedCommetsWrapper),
              }}
            >
              {!isNestedHidden && (
                <Button
                  sx={styles.button}
                  startIcon={<ArrowUpwardIcon />}
                  onClick={() => deleteCommentIdFromNestedList(comment.id)}
                >
                  Hide Nested Comments
                </Button>
              )}
              {!isNestedHidden && <NestedComments commentId={comment.id} />}
              {isNestedHidden && (
                <Button
                  sx={styles.button}
                  startIcon={<ArrowDownwardIcon />}
                  onClick={() => loadNestedComments(comment.kids ?? [])}
                >
                  Show {comment.kids.length} nested comments
                </Button>
              )}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
