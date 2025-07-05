import { white, borderGray } from "constants/colors";

export const styles = {
  fullScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
  },
  centerInParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  default: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  defaultLoader: {
    color: white,
  },
  customLoader: {
    color: borderGray,
  },
};
