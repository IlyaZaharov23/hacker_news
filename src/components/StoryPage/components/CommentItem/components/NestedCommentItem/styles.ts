import { darkGray } from "constants/colors";

export const styles = {
  commonWrapper: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0 0",
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
};
