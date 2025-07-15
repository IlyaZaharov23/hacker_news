import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
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
import { getNestedComments } from "store/hackerNews/selectors/getNestedComments";
import { TEST_ID } from "constants/testIds";

import { NestedCommentsErrorPlaceholder } from "./components/NestedCommentsErrorPlaceholder";
import { WrapperPropsType } from "./types";
import { NestedComments } from "./components/NestedComments";
import { styles } from "./styles";

export const NestedCommentsWrapper: FC<WrapperPropsType> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const nestedComments = useAppSelector(getNestedComments);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const isNestedHidden = (commentId: number) => {
    return !nestedComments[commentId] || nestedComments[commentId].length === 0;
  };

  const deleteCommentIdFromNestedList = (id: number) => {
    dispatch(removeNestedCommentsById(id));
  };

  const loadNestedComments = async (ids: number[]) => {
    try {
      setHasError(false);
      setIsLoading(true);
      const idsPromise = ids.map((id) => dispatch(getCommentById(id)).unwrap());
      await Promise.all(idsPromise).then((res) => {
        dispatch(addNestedCommentsById({ id: comment.id, comments: res }));
      });
    } catch (error) {
      setHasError(true);
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
          ) : hasError ? (
            <NestedCommentsErrorPlaceholder
              loadNestedComments={loadNestedComments}
              kids={comment.kids}
              commentId={comment.id}
            />
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
                  data-testid={TEST_ID.COMMENTS.SHOW_NESTED_COMMENTS_BUTTON(
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
