import {
  bluePrimary,
  darkGray,
  blueBack,
  white,
  hoverGray,
} from "constants/colors";

export const styles = {
  menuItem: {
    backgroundColor: white,
    width: "150px",
    color: darkGray,
    "&:hover": {
      color: darkGray,
      backgroundColor: hoverGray,
    },
  },
  activeMenuItem: {
    color: bluePrimary,
    backgroundColor: blueBack,
  },
  title: {
    fontSize: "0.875rem",
    color: "inherit",
    marginLeft: "0.5rem",
  },
  activeTitle: {
    fontWeight: "600",
    color: 'inherit',
  },
  activeIcon: {
    color: 'inherit',
  },
};
