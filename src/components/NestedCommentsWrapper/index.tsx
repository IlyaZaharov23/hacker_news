import { FC, useState } from "react";
import { useAppDispatch } from "store/hooks";
import { Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { CustomButton } from "components/CustomButton";
import { ProgressLoader } from "components/ProgressLoader";
import {
  getCommentById,
  addNestedCommentsById,
  removeNestedCommentsById,
} from "store/hackerNews/actions";
import { CommentType } from "types/commonTypes";
import { NestedComments } from "./components/NestedComments";
import { styles } from "./styles";
import { TEST_ID } from "constants/testIds";

type WrapperPropsType = {
  comment: CommentType;
};

export const NestedCommentsWrapper: FC<WrapperPropsType> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nestedCommentsIds, setNestedCommentsIds] = useState<number[]>([]);

  const isNestedHidden = (commentId: number) => {
    return !nestedCommentsIds.includes(commentId);
  };

  const addCommentIdToNestedList = (id: number) => {
    setNestedCommentsIds((prev) => [...prev, id]);
  };

  const deleteCommentIdFromNestedList = (id: number) => {
    const newNestedIdList = nestedCommentsIds.filter(
      (commentId) => commentId !== id
    );
    setNestedCommentsIds(newNestedIdList);
    dispatch(removeNestedCommentsById(id));
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
    <Box width="100%">
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
                ...(isNestedHidden(comment.id) &&
                  styles.hiddenNestedCommetsWrapper),
              }}
            >
              {!isNestedHidden(comment.id) && (
                <CustomButton
                  startIcon={<ArrowUpwardIcon />}
                  onClick={() => deleteCommentIdFromNestedList(comment.id)}
                  data-testid={TEST_ID.COMMENTS.HIDE_NESTED_COMMENTS_BUTTON(
                    comment.id
                  )}
                >
                  Hide Nested Comments
                </CustomButton>
              )}
              {!isNestedHidden(comment.id) && (
                <NestedComments commentId={comment.id} />
              )}
              {isNestedHidden(comment.id) && (
                <CustomButton
                  startIcon={<ArrowDownwardIcon />}
                  onClick={() => loadNestedComments(comment.kids ?? [])}
                  data-testid={TEST_ID.COMMENTS.SHOW_NESTED_COMMENS_BUTTON(
                    comment.id
                  )}
                >
                  Show {comment.kids.length} nested comments
                </CustomButton>
              )}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
