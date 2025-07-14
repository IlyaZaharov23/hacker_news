import {
  white,
  black,
  borderGray,
  lightBrown,
  darkGray,
} from "constants/colors";

const SWITCHER_BLOCK_WIDTH = 200;
const SWITCHER_PADDING_X = 16;
const SWITCHER_BORDER_SIZE = 1.5;

export const SWITCHER_BUTTON_WIDTH =
  SWITCHER_BLOCK_WIDTH + SWITCHER_PADDING_X * 2 + SWITCHER_BORDER_SIZE * 2;

export const styles = {
  pageWrapper: {
    backgroundColor: lightBrown,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  topContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4rem",
    maxWidth: "50vw",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 6rem",
  },
  logoWrapper: {
    margin: "0 6rem",
    border: `2px solid ${darkGray}`,
  },
  showNewsButton: {
    height: "36px",
    width: `calc(${SWITCHER_BUTTON_WIDTH}px + ${SWITCHER_PADDING_X * 2}px)`,
    backgroundColor: black,
    color: white,
    fontWeight: "600",
    textTransform: "none",
  },
  imgWrapper: {
    backgroundColor: black,
    height: "128px",
  },
  selectorWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  selectorHelper: {
    fontSize: "2rem",
    fontWeight: "600",
    color: black,
  },
  switcherButton: {
    width: `${SWITCHER_BLOCK_WIDTH}px`,
    height: "42px",
    border: `${SWITCHER_BORDER_SIZE}px solid ${borderGray}`,
    borderRadius: "6px",
    backgroundColor: white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    cursor: "pointer",
    margin: "1.5rem 0",
  },
  storiesType: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: black,
  },
  quoteTitle: {
    fontWeight: "1rem",
    fontStyle: "italic",
    color: darkGray,
  },
  quoteAuthor: {
    fontWeight: "0.875rem",
    fontStyle: "italic",
    alignSelf: "flex-end",
    color: darkGray,
  },
};
