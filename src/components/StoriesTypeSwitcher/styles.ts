import {
  darkGray,
  white,
  lightBrown,
  orangePrimary,
  lightGray,
} from "constants/colors";

export const styles = {
  menuItem: (
    menuWidth: number | undefined,
    fullWidth: boolean | undefined
  ) => ({
    backgroundColor: white,
    width: fullWidth ? menuWidth : "150px",
    color: darkGray,
    "&:hover": {
      color: darkGray,
      backgroundColor: lightGray,
    },
  }),
  activeMenuItem: {
    color: orangePrimary,
    backgroundColor: lightBrown,
  },
  title: {
    fontSize: "0.875rem",
    color: "inherit",
    marginLeft: "0.5rem",
  },
  activeTitle: {
    fontWeight: "600",
    color: "inherit",
  },
  activeIcon: {
    color: "inherit",
  },
};
