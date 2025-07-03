import {
  borderGray,
  lightGray,
  darkGray,
  semiLightGray,
  black,
} from "../../../../constants/colors";

export const styles = {
  commentWrapper: {
    padding: "1rem",
    border: `1px solid ${borderGray}`,
    borderRadius: "6px",
    margin: "0 0 1rem",
    backgroundColor: lightGray,
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
  button: {
    fontSize: "0.75rem",
    fontWeight: "600",
    color: black,
    "&:hover": {
      backgroundColor: semiLightGray,
    },
  },
  nestedCommentsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '40vw'
  },
};
