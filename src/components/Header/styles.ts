import { black, hoverGray, orangePrimary, white } from "constants/colors";

const HEADER_PADDING_X = 24;
const HEADER_PADDING_Y = 14;
const ICON_SIZE = 32;

export const HEADER_HEIGHT = HEADER_PADDING_Y * 2 + ICON_SIZE;

export const styles = {
  commonWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: `calc(100% - ${HEADER_PADDING_X * 2}px)`,
    padding: `${HEADER_PADDING_Y}px ${HEADER_PADDING_X}px`,
    backgroundColor: orangePrimary,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: white,
    marginLeft: "1rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: white,
    "&:hover": {
      color: hoverGray,
    },
    "&:active": {
      color: black,
    },
  },
  buttonText: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "inherit",
    marginLeft: "0.5rem",
  },
  disabledButton: {
    display: "flex",
    alignItems: "center",
    color: hoverGray,
  },
  icon: {
    cursor: "pointer",
    color: "inherit",
    width: `${ICON_SIZE}px`,
    height: `${ICON_SIZE}px`,
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },
};
