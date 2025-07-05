import {
  white,
  orangePrimary,
  black,
} from "constants/colors";

export const styles = {
  pageWrapper: {
    backgroundColor: orangePrimary,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  showNewsButton: {
    height: "36px",
    backgroundColor: white,
    color: black,
    fontWeight: "600",
  },
  imgWrapper: {
    backgroundColor: black,
    height: '128px',
  },
  title: {
    fontSize: "2rem",
    fontWeight: "600",
    color: white,
    margin: "3rem 0",
  },
};
