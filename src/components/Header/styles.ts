import {
  hoverGray,
  lightBrown,
  orangePrimary,
  darkGray,
} from "constants/colors";

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
    color: "inherit",
    marginLeft: "1rem",
  },
  button: (isMenuOpen?: boolean) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: isMenuOpen ? darkGray : lightBrown,
    "&:hover": {
      color: darkGray,
    },
  }),
  activeButton: {
    color: darkGray,
  },
  disabledButton: {
    display: "flex",
    alignItems: "center",
    color: hoverGray,
  },
  rightButtonWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    color: "inherit",
    width: `${ICON_SIZE}px`,
    height: `${ICON_SIZE}px`,
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: lightBrown,
    "&:hover": {
      color: darkGray,
    },
  },
  disabledLogoWrapper: {
    cursor: "default",
    color: hoverGray,
    "&:hover": {
      color: hoverGray,
    },
  },
};
