import { darkGray } from "constants/colors";

export const styles = {
  horizontal: {
    backgroundColor: darkGray,
    margin: "0.75rem 0",
    height: "1px",
    width: `100%`,
  },
  vertical: (height: number | undefined) => ({
    height: `${height}px`,
    width: "2px",
    backgroundColor: darkGray,
  }),
};
