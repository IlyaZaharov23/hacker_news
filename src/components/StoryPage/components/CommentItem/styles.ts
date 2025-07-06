import { darkGray } from "constants/colors";

const COMMENT_PADDING = 16;

export const styles = {
  commentWrapper: {
    padding: `${COMMENT_PADDING}px`,
    marginBottom: "1rem",
    // 16px - scroll width + some paddings_x
    width: `calc(100% - ${COMMENT_PADDING * 2 + 16}px)`,
  },
  commentInfoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
  },
  commentAuthor: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: darkGray,
  },
  commentDate: {
    fontSize: "0.75rem",
    fontWeight: "400",
    color: darkGray,
  },
  commentTitle: {
    fontSize: "1rem",
    fontWeight: "400",
    color: darkGray,
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.5rem",
  },
  nestedCommentsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5rem",
    marginBottom: "1rem",
  },
  hiddenNestedCommetsWrapper: {
    marginBottom: "0",
  },
};
