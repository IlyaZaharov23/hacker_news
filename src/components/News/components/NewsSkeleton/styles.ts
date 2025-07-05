import { borderGray, white } from "constants/colors";

const SKELETON_PADDING_X = 12;
const SKELETON_BORDER = 1;

export const styles = {
  commonWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "hidden",
    maxHeight: `100vh`,
    width: "100%",
  },
  skeletonItemWrapper: {
    display: "flex",
    flexDirection: "column",
    border: `${SKELETON_BORDER}px solid ${borderGray}`,
    borderRadius: "6px",
    marginBottom: "1rem",
    padding: `16px ${SKELETON_PADDING_X}px`,
    width: `calc(100% - ${SKELETON_PADDING_X * 2 + SKELETON_BORDER * 2}px)`,
    backgroundColor: white,
  },
};
