import {
  black,
  lightBrown,
  white,
  darkGray,
  borderGray,
} from "constants/colors";
import { boxShadow } from "constants/styleProps";
import { HEADER_HEIGHT } from "components/Header/styles";

const STORY_HEADER_MARGIN_Y = 32;
export const STORY_HEADER_HEIGTH = STORY_HEADER_MARGIN_Y * 2 + 100;

export const styles = {
  commonWrapper: {
    backgroundColor: lightBrown,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    width: "100%",
    marginTop: `${HEADER_HEIGHT}px`,
    overflowY: "auto",
    maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
  },
  contentWrapper: {
    maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
    overflowY: "hidden",
  },
  loadingWrapper: {
    overflowY: "hidden",
  },
  storyWrapper: {
    width: "80vw",
    margin: `${STORY_HEADER_MARGIN_Y}px auto`,
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    backgroundColor: white,
    boxShadow: boxShadow,
  },
  topWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  title: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: black,
  },
  redirectIcon: {
    width: "32px",
    height: "32px",
    color: black,
    cursor: "pointer",
    "&:hover": {
      color: borderGray,
    },
  },
  bottomWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
  },
  categoryWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: darkGray,
  },
  category: {
    fontWeight: "400",
    marginRight: "0.5rem",
  },
};
