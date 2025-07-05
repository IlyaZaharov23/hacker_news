import {
  black,
  borderGray,
  lightGray,
  darkGray,
  white,
} from "constants/colors";

export const styles = {
  newsItemWrapper: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${borderGray}`,
    borderRadius: "6px",
    margin: "0 0 1rem",
    padding: "1rem 0.75rem",
    backgroundColor: white,
    "&:hover": {
      cursor: "pointer",
      boxShadow: `0 0 0 1px ${borderGray}`,
      backgroundColor: lightGray,
    },
  },
  newsInfoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 0.5rem",
  },
  titleWrapper: {
    display: "inline-block",
    padding: "0 0.5rem",
  },
  storyTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: black,
    width: "auto",
  },
  infoItemWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
  },
  infoTitle: {
    fontSize: "0.75rem",
    fontWeight: "600",
    color: darkGray,
  },
  categoryTitle: {
    fontWeight: "400",
    marginRight: "0.25rem",
  },
  divider: {
    backgroundColor: darkGray,
    margin: "0.75rem 0",
    height: "1px",
    width: `100%`,
  },
};
